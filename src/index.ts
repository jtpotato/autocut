import { spawn } from "child_process";
import getAllVideoFiles from "./utils/getvideofiles";
import fs from "fs";
import path from "path";

async function main() {
  if (process.argv.includes("cut")) {
    // parsing
    let index = process.argv.indexOf("cut");
    if (index + 1 == process.argv.length) {
      console.log("No file path found.");
      return;
    }
    let inputFilePath = process.argv[index + 1];

    // get all files in path.
    let videoFiles = getAllVideoFiles(inputFilePath);

    // cut each video
    fs.mkdirSync(path.join("output", inputFilePath), { recursive: true });

    for (let videoFile of videoFiles) {
      let autoEditor = spawn("auto-editor", [
        videoFile,
        "--margin",
        "0.1sec",
        "-o",
        path.join("output", videoFile),
      ]);
      autoEditor.on("error", () => {
        console.log("auto-editor may not be up to date... Fixing...");
        let pip = spawn("pip", ["install", "auto-editor", "--upgrade"]);
        pip.on("close", (code) => {
          console.log("Try running it again.");
        });
      });
      autoEditor.stdout.on("data", (data) => {
        let dataString: string = data.toString();
        console.log(dataString.match(/\d+(\.\d+)?%/)![0])
      });
    }
  }
}

main();
