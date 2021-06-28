import cssPrefix from "autoprefixer";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
const postcssOptions = {
	plugins: [cssPrefix],
	minimize: false,
	// Extracting is important because we should not force the consumers to
	// use a specific way to handle our CSS imports.
	// See: https://github.com/vercel/next.js/blob/master/errors/css-npm.md
	// Note that this is related to the bundled JS files
	extract: "bundle.css",
};

/**
 * Main bundling process
 * @type {import("rollup").RollupOptions}
 */
const bundleMain = {
	input: "src/index.ts",
	output: [
		{ file: "dist/cjs.js", format: "cjs" },
		{ file: "dist/esm.js", format: "esm" },
	],
	external: [
		"@banhmi/icon/solid",
		"@banhmi/icon/outline",
		"@moai/core",
		"react",
		"react/jsx-runtime",
	],
	plugins: [
		del({ targets: ["dist"] }),
		postcss(postcssOptions),
		typescript({ useTsconfigDeclarationDir: true }),
	],
};

export default [bundleMain];
