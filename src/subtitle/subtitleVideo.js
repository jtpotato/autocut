import { spawn } from "child_process";
import path from "path";

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
  });
}

export default subtitleVideo;
