import path from "path";
import { fileURLToPath } from "url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

function resolvePath(dir) {
  return path.resolve(projectRoot, dir);
}

/**
 * Single source for the Vite path aliases, shared by the Storybook config and
 * the Vitest config so the two can never drift.
 *
 * `@tokens` and `@docs` point at directories, not barrel files — import the
 * specific topic (`@tokens/color`, `@docs/data/shadow`) rather than the folder.
 */
export const aliases = {
  "@": resolvePath("src"),
  "@tokens": resolvePath("src/tokens"),
  "@styles": resolvePath("src/styles"),
  "@theme": resolvePath("src/theme"),
  "@components": resolvePath("src/components"),
  "@docs": resolvePath("src/docs"),
};

export default aliases;
