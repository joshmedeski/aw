import { Command, flags } from "@oclif/command";

import { printAllFiles, printThemeFiles } from "../utils/files";

export default class List extends Command {
	static description = "describe the command here";

	static examples = [`$ aw list `];

	static flags = {
		help: flags.help({ char: "h" }),
		theme: flags.boolean({ char: "t" }),
	};

	async run() {
		const { flags } = this.parse(List);
		const { theme } = flags;

		function noFlags(): boolean {
			return !theme;
		}

		try {
			if (noFlags()) {
				this.log(await printAllFiles());
			}
			if (theme) {
				this.log(await printThemeFiles());
			}
		} catch (err) {
			this.log("❌ Failed to list");
			this.log("Reason", err);
		}
	}
}
