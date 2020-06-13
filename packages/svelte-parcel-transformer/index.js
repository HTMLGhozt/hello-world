const path = require("path");
const { Transformer } = require("@parcel/plugin");
const { default: SourceMap } = require("@parcel/source-map");
const { relativeUrl } = require("@parcel/utils");
const { compile, preprocess } = require("svelte/compiler.js");

Object.defineProperty(exports, "__esModule", { value: true });

function generateName(input) {
  let name = path
    .basename(input)
    .replace(path.extname(input), "")
    .replace(/[^a-zA-Z_$0-9]+/g, "_")
    .replace(/^_/, "")
    .replace(/_$/, "")
    .replace(/^(\d)/, "_$1");

  name = name[0].toUpperCase() + name.slice(1);
}

exports.default = new Transformer({
  async loadConfig({ config, options }) {

    const configFile = await config.getConfig(
			[".svelterc", "svelte.config.js"], 
			{ packageKey: "svelte" }
		);

		let contents = null;
		if (configFile) {
			contents = configFile.contents;

			const preprocessors = contents.preprocessors;

			return { config: {...config, preprocessors } };
		}
		return { config, options }
	},
	
	async parse({asset, config}) {

		console.log({asset, config});

    if (!config && !config.preprocessors) {
      return;
		}

		let code = await asset.getCode();

		const preprocessed = await preprocess(
			code,
			config.preprocessors,
			{
				css: false,
				...config.compiler,
				filename: asset.filePath,
				name: generateName(asset.filePath),
			},
		);

		code = preprocessed.toString();
		
    return {
      type: 'svelte',
      version: '3.0.0',
			program: code,
    };
  },

  async transform({ asset, config }) {
		let code = await asset.getCode();
	

    if (config.preprocessors) {
      const preprocessed = await preprocess(
        code,
        config.preprocessors,
				{
					css: false,
					...config.compiler,
					filename: sourceFileName,
					name: generateName(sourceFileName),
				},
      );
      code = preprocessed.toString();
    }

    const { js, css } = compile(code, config.compiler);

    return [
      asset,
      {
        type: "js",
        filePath: asset.filePath + ".js",
        content: js.code,
      },
    ].filter(Boolean);
  },
});
