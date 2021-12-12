import * as fs from "fs";
import * as path from "path";

const removeSystemFiles = (files: string[]): string[] => {
	return files.filter((file) => file !== ".DS_Store");
};

const readDir = async (path: string): Promise<string[]> => {
	return new Promise((resolve, reject) => {
		return fs.readdir(path, (err, filenames) =>
			err != null ? reject(err) : resolve(removeSystemFiles(filenames))
		);
	});
};

export const getAllFiles = async (): Promise<string[]> => {
	const files = await readDir(`/Users/joshmedeski/.config/aw/aw-themes`);
	return files;
};

export const printAllFiles = async (): Promise<string> => {
	let output = "";
	const files = await getAllFiles();
	const fileNames = new Set(files.map((file) => path.parse(file).name));
	fileNames.forEach((file) => (output += `${file}\n`));
	return output;
};

export const printThemeFiles = async (): Promise<string> => {
	let output = "";
	const files = await getAllFiles();
	const fileNames = files
		.filter((file) => path.parse(file).ext === ".yaml")
		.map((file) => path.parse(file).name);
	fileNames.forEach((file) => (output += `${file}\n`));
	return output;
};
