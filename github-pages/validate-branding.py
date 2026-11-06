"""Validate browser branding in the generated GitHub Pages HTML."""
import json
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path("dist/client")
BASE = "/Muhammad_Monis_Portfolio/"
PAGES = {
    "index.html": "Muhammad Monis Portfolio",
    "projects/cost-to-income-ratio/index.html": "Cost-to-Income Ratio Optimisation | Muhammad Monis Portfolio",
    "projects/strategic-business-transformation/index.html": "Strategic Business Transformation | Muhammad Monis Portfolio",
    "projects/product-adoption-customer-retention/index.html": "Product Adoption & Customer Retention | Muhammad Monis Portfolio",
    "projects/compliance-process-optimisation-operational-risk-monitoring/index.html": "Compliance Process Optimisation & Operational Risk Monitoring | Muhammad Monis Portfolio",
    "projects/transportation-network-volume-forecasting-optimisation/index.html": "Transportation Network Volume Forecasting & Optimisation | Muhammad Monis Portfolio",
    "projects/satellite-network-performance-service-reliability/index.html": "Satellite Network Performance & Service Reliability | Muhammad Monis Portfolio",
    "404.html": "Page not found | Muhammad Monis Portfolio",
}
ICONS = {"favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png", "site.webmanifest"}


class HeadParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.titles = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
            self.titles.append("")
        if tag == "link" and attrs.get("rel") in {"icon", "apple-touch-icon", "manifest"}:
            self.links.append(attrs.get("href", ""))

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.titles[-1] += data


def validate():
    for page, title in PAGES.items():
        parser = HeadParser()
        parser.feed((ROOT / page).read_text())
        assert parser.titles == [title], f"Incorrect title in {page}: {parser.titles}"
        assert set(parser.links) == {BASE + name for name in ICONS}, f"Incorrect icon paths in {page}: {parser.links}"
        for name in ICONS:
            assert (ROOT / name).is_file(), f"Missing icon asset: {name}"
        print(f"Branding OK: {page}")
    manifest = json.loads((ROOT / "site.webmanifest").read_text())
    assert manifest["name"] == "Muhammad Monis Portfolio"
    for icon in manifest["icons"]:
        assert not icon["src"].startswith(("/", "http")), "Manifest icons must remain relative"
        assert (ROOT / icon["src"]).is_file(), f"Missing manifest icon: {icon['src']}"


if __name__ == "__main__":
    validate()