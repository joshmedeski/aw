import { Command, flags } from "@oclif/command";

import { printAllFiles } from "../utils/files";

export default class List extends Command {
	static description = "describe the command here";

	static examples = [`$ aw list `];

	static flags = {
		help: flags.help({ char: "h" }),
		// TODO flag to only show alacritty colors
		// TODO flag to only show wallpapers
	};

	async run() {
		this.log(await printAllFiles());
	}
}
