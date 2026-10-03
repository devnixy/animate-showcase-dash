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

## Rules

- All colors, fonts, and animations for the CFAB landing page live as semantic tokens and keyframes in `src/styles.css` ("Woven industrial grid" system: paper/ink/clay/mute, Space Grotesk + Inter + JetBrains Mono). Components must never hardcode colors — extend the token set instead.
- Scroll-reveal animations use the `Reveal` component (`src/components/Reveal.tsx`) + `useInView` hook with the `rise` / `reveal` / `thread` classes; keep `prefers-reduced-motion` support when adding new animation classes.

