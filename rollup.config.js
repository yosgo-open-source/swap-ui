import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import svg from "rollup-plugin-svg";
import nodePolyfills from "rollup-plugin-node-polyfills";

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
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": ["ForwardRef", "Memo", "isFragment"],
      },
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    svg({
      base64: true,
    }),
    nodePolyfills(),
  ],
};
