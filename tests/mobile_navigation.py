"""Mobile navigation regression checks. Run with python3 tests/mobile_navigation.py."""
import asyncio
import os
from playwright.async_api import async_playwright

ORIGIN = os.environ.get("NAV_TEST_ORIGIN", "http://localhost:8080")
PAGES = [
    "/",
    "/projects/cost-to-income-ratio/",
    "/projects/strategic-business-transformation/",
    "/projects/product-adoption-customer-retention/",
    "/projects/compliance-process-optimisation-operational-risk-monitoring/",
    "/projects/transportation-network-volume-forecasting-optimisation/",
    "/projects/satellite-network-performance-service-reliability/",
]
SECTIONS = ["About", "Skills", "Projects", "Certifications", "Languages", "Contact"]

async def closed(page):
    await page.get_by_role("dialog").wait_for(state="hidden")
    await page.wait_for_function("getComputedStyle(document.body).overflow !== 'hidden'")

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for width, height in [(int(os.environ.get("NAV_TEST_WIDTH", "390")), 568)]:
            context = await browser.new_context(viewport={"width": width, "height": height}, has_touch=True)
            page = await context.new_page()
            for path in PAGES:
                await page.goto(ORIGIN + path, wait_until="domcontentloaded")
                await page.wait_for_timeout(700)
                await page.reload(wait_until="domcontentloaded")
                await page.wait_for_timeout(700)
                trigger = page.get_by_role("button", name="Open menu")
                assert await trigger.count() == 1, f"Missing menu: {width}px {path}"
                await trigger.click()
                dialog = page.get_by_role("dialog")
                await dialog.wait_for(state="visible")
                assert await page.get_by_role("button", name="Open menu", include_hidden=True).get_attribute("aria-expanded") == "true"
                await page.wait_for_timeout(250)
                assert await dialog.evaluate("el => el.getBoundingClientRect().left >= 0 && el.getBoundingClientRect().right <= innerWidth + 1"), "Menu exceeds viewport"
                assert await page.locator("body").evaluate("el => getComputedStyle(el).overflow === 'hidden'")
                for label in SECTIONS:
                    assert await dialog.get_by_role("link", name=label, exact=True).count() == 1
                await page.keyboard.press("Escape")
                await closed(page)
                assert await trigger.evaluate("el => el === document.activeElement"), "Focus not restored"
                await trigger.click()
                await page.get_by_role("button", name="Close", exact=True).click()
                await closed(page)
                await trigger.click()
                await page.mouse.click(8, height // 2)
                await closed(page)
                for label in SECTIONS:
                    await page.goto(ORIGIN + path, wait_until="domcontentloaded")
                    await page.wait_for_timeout(700)
                    await page.get_by_role("button", name="Open menu").click()
                    await page.get_by_role("dialog").get_by_role("link", name=label, exact=True).click()
                    await closed(page)
                    section = label.lower()
                    await page.wait_for_function("id => location.hash === '#' + id && document.getElementById(id) !== null", arg=section)
                    await page.wait_for_timeout(200)
                    assert await page.locator('#' + section).evaluate("el => {const r=el.getBoundingClientRect(); return r.top >= 63 && r.top < innerHeight}"), f"Wrong section position: {width}px {path} -> {label}"
                print(f"PASS {width}x{height} {path}: refresh, dismissals, six section links, scroll unlock")
            # Home -> every case study -> home via mobile navigation.
            for path in PAGES[1:]:
                await page.goto(ORIGIN + '/#projects', wait_until="domcontentloaded")
                await page.locator(f'a[href="{path.rstrip("/")}"]').first.click()
                await page.wait_for_url(ORIGIN + path.rstrip("/"))
                await page.wait_for_timeout(300)
                await page.wait_for_timeout(300)
                await page.get_by_role("button", name="Open menu").click()
                await page.get_by_role("dialog").get_by_role("link", name="Projects", exact=True).click()
                await closed(page)
                await page.wait_for_function("location.pathname === '/' && location.hash === '#projects'")
            # Switch to desktop while the drawer is open: no hidden scroll lock.
            await page.get_by_role("button", name="Open menu").click()
            await page.set_viewport_size({"width": 1280, "height": 1800})
            await closed(page)
            assert not await page.get_by_role("button", name="Open menu").is_visible()
            await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())