import { Command, flags } from "@oclif/command";

export default class Hello extends Command {
	static description = "describe the command here";

	static examples = [
		`$ aw hello
hello world from ./src/hello.ts!
`,
	];

	static flags = {
		help: flags.help({ char: "h" }),
	};

	async run() {
		this.log("list");
	}
}
