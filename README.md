# @wc-toolkit/type-parser 1.3.1 — noisy warnings repro

```sh
npm install
npm run analyze
```

`src/components/my-element.ts` is the only file in the CEM `globs`. `src/stories/` is in `exclude`.

What the run shows:

1. `StoryArgs` / `HTMLElementTagNameMap` warnings come from `src/stories/my-element.stories.ts`: not in `globs` and listed in `exclude`, but `getTsProgram` walks every file the tsconfig covers.
2. `HTMLElement` / `Element` / `LitElement` warnings come from lib/`node_modules` base types that every Lit component references; the manifest output for them is fine (`null | HTMLElement`).
3. `sheet: CSSStyleSheet | null` is inlined into `custom-elements.json` as a large object (with internal names like `__@iterator@364`), despite the default `parseObjectTypes: "none"`.
