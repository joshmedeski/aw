import { Command, flags } from "@oclif/command";
import { exec } from "../utils/exec";
import wallpaper from "wallpaper";

export default class Set extends Command {
	static description = "sets the Alacritty theme and macOS wallpaper";

	static examples = [
		`$ aw set nord
$ aw set --default nord`,
	];

	static flags = {
		help: flags.help({ char: "h" }),
		theme: flags.boolean({ char: "t" }),
		wallpaper: flags.boolean({ char: "w" }),
	};

	static args = [{ name: "themeName" }];

	setAlacrittyColors = async (themeName: string) => {
		try {
			await exec(
				`cp ~/.config/aw/aw-themes/${themeName}.yml ~/.config/alacritty/theme.yml`
			);
			this.log(`✅ Successfully set the ${themeName} colors`);
		} catch (error) {
			this.log("❌ Failed to set Alacritty colors");
		}
	};

	setWallpaper = async (themeName: string) => {
		try {
			await wallpaper.set(
				`/Users/joshmedeski/.config/aw/aw-themes/${themeName}.jpg`
			);
			this.log(`✅ Successfully set the ${themeName} wallpaper`);
		} catch (error) {
			this.log(error);
			this.log("❌ Failed to set wallpaper");
		}
	};

	async run() {
		const { args, flags } = this.parse(Set);
		const { themeName } = args;
		const { theme, wallpaper } = flags;

		function noFlags(): boolean {
			return !theme && !wallpaper;
		}

		try {
			if (theme || noFlags()) {
				await this.setAlacrittyColors(themeName);
			}

			if (wallpaper || noFlags()) {
				await this.setWallpaper(themeName);
			}
		} catch (err) {
			this.log("❌ Failed to set wallpaper");
			this.log("Reason", err);
		}
	}
}
