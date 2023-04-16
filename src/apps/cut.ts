import path from "path";
import fs from "fs";
import getAllVideoFiles from "../utils/getvideofiles";
import { spawn } from "child_process";
import { debug, emphasis } from "../utils/gradients";

function cut(videoFiles: string[]) {
  return new Promise((resolve, reject) => {
    let autoEditor = spawn("auto-editor", [
      ...videoFiles,
      "--margin",
      "0.1sec",
      "--export",
      "final-cut-pro",
      // "-o",
      // path.join("output", videoFile.toLowerCase()),
    ]);
    autoEditor.on("error", () => {
      console.log(debug("auto-editor may not be up to date... Fixing..."));
      let pip = spawn("pip", ["install", "auto-editor", "--upgrade"]);
      pip.on("close", (code) => {
        console.log(emphasis("Fixed. Try running again."));
      });
    });
    autoEditor.stdout.on("data", (data) => {
      process.stdout.cursorTo(0);
      process.stdout.write(data.toString());
    });
    autoEditor.stderr.on("data", (data) => {
      console.log(data.toString())
    })
    console.log(debug("Starting..."));
    autoEditor.on("close", (code) => {
      resolve(code);
    });
  });
}

async function CutApp(inputFilePath: string) {
  // get all files in path.
  let videoFiles = getAllVideoFiles(inputFilePath);

  // cut each video
  fs.mkdirSync(path.join("output", inputFilePath), { recursive: true });

  await cut(videoFiles)
}

export default CutApp;
