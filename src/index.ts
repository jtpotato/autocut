#! /usr/bin/env node

import CutApp from "./apps/cut";
import { error, title } from "./utils/gradients";

let version = "1.0.3";

async function main() {
  console.log(title(`Autocut ${version}`));
    if (!process.argv[2]) {
      console.log(error("No file path given."));
      return;
    }
    let inputFilePath = process.argv[2];
    CutApp(inputFilePath);
}

main();
