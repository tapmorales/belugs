const babel = require("rollup-plugin-babel");

export default {
    input: "src/index.js",
    output: [
        { file: "dist/bundle.cjs.js", format: "cjs" },
        { file: "dist/bundle.iife.js", format: "iife" },
        { file: "dist/bundle.umd.js", format: "umd", name: "belugs" }
    ],
    plugins: [babel()]
};
