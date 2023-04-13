import { debug, title } from "./logging";
import minimist = require("minimist");
import { Help } from "./options/help";
import { Cut } from "./apps/cut/index"

const interpretArgs = () => {
  let args = minimist(process.argv.slice(2), {
    alias: {
        "help": "h",
        "input": "i"
    },
  });

  debug(args)

  if (args.help) {
    Help();
    return
  }
  
  if (args._[0] === "cut") {
    Cut(args);
  }
};

interpretArgs();
