import path from "path";
import fs from "fs";
import getAllVideoFiles from "../utils/getvideofiles";
import { spawn } from "child_process";
import { debug, emphasis } from "../utils/gradients";

function CutApp(inputFilePath: string) {
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
      console.log(debug("auto-editor may not be up to date... Fixing..."));
      let pip = spawn("pip", ["install", "auto-editor", "--upgrade"]);
      pip.on("close", (code) => {
        console.log(emphasis("Try running it again."));
      });
    });
    autoEditor.stdout.on("data", (data) => {
      console.log(data.toString());
    });
  }
}

export default CutApp;
