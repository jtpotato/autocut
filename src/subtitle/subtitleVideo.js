import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import jsonToSrt from "./jsonToSrt.js";

/**
 * @param {string} filename
 */
function subtitleVideo(filename) {
  const whisper = spawn("whisper", [
    filename,
    "--model",
    "base.en",
    "--output_format",
    "srt",
    "--output_dir",
    path.dirname(filename),
    "--word_timestamps",
    "True",
    "--max_line_width",
    "8",
    "--max_line_count",
    "1",
    "--verbose",
    "False"
  ]);

  whisper.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  whisper.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  whisper.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  whisper.on("close", (code) => {
    console.log(`${filename} Completed with code ${code}`);

    // Check if filename.json was created
    jsonToSrt(filename);
  });
}

export default subtitleVideo;
