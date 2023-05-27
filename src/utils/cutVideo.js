import { spawn } from "child_process";

/**
 * @param {string} filename
 */
async function cutVideo(filename) {
  const autoEditor = spawn("auto-editor", [
    filename,
    "--export",
    "final-cut-pro",
    "-o",
    filename + ".fcpxml",
  ]);
  autoEditor.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  autoEditor.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  autoEditor.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  autoEditor.on("close", (code) => {
    console.log(`${filename} Completed with code ${code}`);
  });
}

export default cutVideo;
