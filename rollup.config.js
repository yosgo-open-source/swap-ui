import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["styled-components"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(
      /**
       * Relative issue
       * https://github.com/transitive-bullshit/react-modern-library-boilerplate/issues/29#issuecomment-635883117
       */
      {
        include: "node_modules/**",
        namedExports: {
          "node_modules/react-is/index.js": [
            "ForwardRef",
            "Memo",
            "isFragment",
          ],
        },
      }
    ),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
