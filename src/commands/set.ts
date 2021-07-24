import { Command, flags } from "@oclif/command";
import { themes } from "../themes";
import { exec } from "../utils/exec";

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
			this.log("setting alacritty colors failed failed");
		}
	};

	setWallpaper = async (themeName: string) => {
		try {
			await exec(
				`wallpaper set ~/.config/alacritty/aw/aw-themes/${themeName}.jpg`
			);
		} catch (error) {
			this.log("wallpaper failed");
		}
	};

	async run() {
		const { args } = this.parse(Set);
		const { themeName } = args;
		await this.setWallpaper(themeName);
		this.log(`${themeName} set successfully`);
		await this.setAlacrittyColors(themeName);
	}
}
