import CutApp from "./apps/cut";
import { emphasis, error, title } from "./utils/gradients";

let version = "1.0.0";

async function main() {
  console.log(title(`Imaginaition ${version}`));
  if (process.argv.includes("cut")) {
    console.log(emphasis("Running `cut`"));
    let index = process.argv.indexOf("cut");
    if (index + 1 == process.argv.length) {
      console.log(error("No file path given."));
      return;
    }
    let inputFilePath = process.argv[index + 1];
    CutApp(inputFilePath);
  }
}

main();
