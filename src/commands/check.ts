import { Command, flags } from "@oclif/command";
import { exec } from "../utils/exec";

export default class Check extends Command {
	static description = "checks if your system is ready to use aw";

	static examples = [
		`$ aw check
  ❌ wallpaper cli found
	✅ fzf found
  ✅ tmux found
`,
	];

	static flags = {
		help: flags.help({ char: "h" }),
	};

	checkFile = async (file: string): Promise<string> => {
		try {
			await exec(`test -f ${file}`);
			return `✅ ${file} found`;
		} catch (error) {
			this.log(error);
			return `❌ ${file} not found`;
		}
	};

	checkBinary = async (binary: string): Promise<string> => {
		try {
			await exec(`which ${binary}`);
			return `✅ ${binary} found`;
		} catch (error) {
			return `❌ ${binary} not found`;
		}
	};

	async run() {
		this.log(await this.checkBinary("wallpaper"));
		this.log(await this.checkBinary("tmux"));
		this.log(await this.checkBinary("fzf"));
	}
}
