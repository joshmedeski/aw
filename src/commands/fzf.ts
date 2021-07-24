import { Command, flags } from "@oclif/command";
import { themes } from "../themes";
import { exec } from "../utils/exec";

export default class Set extends Command {
	static description = "sets the Alacritty theme and macOS wallpaper";

	static examples = [`$ aw fzf`];

	static flags = {
		help: flags.help({ char: "h" }),
	};

	// TODO aw set (aw list | fzf-tmux -p -w 20% --reverse)

	async run() {
		const { args } = this.parse(Set);
		const { themeName } = args;
		this.log(`${themeName} set successfully`);
	}
}
