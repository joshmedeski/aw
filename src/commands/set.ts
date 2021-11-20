import { Command, flags } from "@oclif/command";
import { exec } from "../utils/exec";
import wallpaper from "wallpaper";

export default class Set extends Command {
	static description = "sets the Alacritty theme and macOS wallpaper";

	static examples = [`$ aw set nord`];

	static flags = {
		help: flags.help({ char: "h" }),
		// TODO flag to only set alacritty colors
		// TODO flag to only set wallpapers
	};

	static args = [{ name: "themeName" }];

	setAlacrittyColors = async (themeName: string) => {
		try {
			await exec(
				`cp ~/.config/alacritty/aw/aw-themes/${themeName}.yml ~/.config/alacritty/theme.yml`
			);
		} catch (error) {
			this.log("❌ Failed to set Alacritty colors");
		}
	};

	setWallpaper = async (themeName: string) => {
		try {
			await wallpaper.set(`~/.config/alacritty/aw/aw-themes/${themeName}.jpg`);
		} catch (error) {
			this.log(error);
			this.log("❌ Failed to set wallpaper");
		}
	};

	async run() {
		const { args } = this.parse(Set);
		const { themeName } = args;
		if (themeName) {
			await this.setWallpaper(themeName);
			this.log(`${themeName} set successfully`);
			await this.setAlacrittyColors(themeName);
		} else {
			this.log("Theme name is required (ex: aw set nord)");
		}
	}
}
