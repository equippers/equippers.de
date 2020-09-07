const { resolve } = require('path');
const tsconfig = require('./tsconfig');

/**
 * Get the rollup options.
 *
 * @param {import("typescript").CompilerOptions} compilerOptions
 *
 * @returns {import("rollup").RollupOptions}
 */
const getOptions = (compilerOptions) => [
	{
		input: resolve(__dirname, compilerOptions.outDir, 'index.js'),
		output: {
			file: resolve(__dirname, compilerOptions.outDir, '..', 'bundle.js'),
			format: 'iife',
		},
	},
	{
		input: resolve(__dirname, compilerOptions.outDir, 'egroups/index.js'),
		output: {
			file: resolve(__dirname, compilerOptions.outDir, '..', 'egroups-bundle.js'),
		},
	},
];

export default getOptions(tsconfig.compilerOptions);
