<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Media lives in the repo under src/assets and is imported directly (no .asset.json/CDN imports), so the GitHub Pages copy has no Lovable-hosted dependency.
- GitHub Pages build is opt-in via GITHUB_PAGES=true (base / for the user site MonisAmir1.github.io, nitro off, prerender of the listed pages); new routes must be added to staticPages in vite.config.ts and the workflow page check.
- Favicon formats are local files in public; shared head links use BASE_URL and manifest icon URLs stay relative so both hosting modes work.
- Use the shared MobileNavigation drawer on home and case-study headers; dismiss its modal locks before navigating to homepage sections so cross-page links and touch scrolling remain reliable.
