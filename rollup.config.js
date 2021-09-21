import typescript from "rollup-plugin-typescript2";
import svg from "rollup-plugin-svg";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript(), svg({ base64: true })],
    external: [...Object.keys(pkg.peerDependencies || {})],
  },
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [typescript(), svg({ base64: true })],
    external: [...Object.keys(pkg.peerDependencies || {})],
  },
];
