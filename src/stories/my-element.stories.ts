// Not in the CEM globs and listed in `exclude`, but still visited by getTsProgram
// because the tsconfig has no "include" (so it covers the whole project).
import type { MyElement } from '../components/my-element';

export type StoryArgs = Partial<MyElement>;
export type AnyElementMap = HTMLElementTagNameMap;
