import { ParsedArgs } from "minimist";
import { title, error } from "../../logging";

const version = "v0.0.1"

export function Cut(args: ParsedArgs) {
    console.log(title(`Cut ${version}`));
    if (!args.input) {
        console.log(error("No input folder specified."))
    }
}