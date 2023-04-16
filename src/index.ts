#! /usr/bin/env node

import fs from 'fs/promises';
import { exec } from 'child_process';
import { debug, emphasis, error, title } from "./utils/gradients.js";

console.log(title("Autocut 2.0.0 🚀"))

// Create concat-list.txt with filenames of all .MOV files in the current directory
async function main() {
  try {
    const files = await fs.readdir('.');
    const movFiles = files.filter((file) => file.toLowerCase().endsWith('.mov'));
    const concatList = movFiles.map((file) => `file ${file}`).join('\n');
    await fs.writeFile('concat-list.txt', concatList);

    // Use ffmpeg to concatenate the videos and output merged.mp4
    console.log(emphasis("Concatenating videos 🪄"))
    await execPromise('ffmpeg -f concat -safe 0 -i concat-list.txt -c:v copy merged.mp4');

    // Print the list of concatenated videos
    console.log(emphasis('Concatenated ✨'));
    console.log(debug(movFiles.join('\n')));

    // Use auto-editor to apply editing and export to final-cut-pro format
    console.log(emphasis('Applying edits 🎬'));
    await execPromise('auto-editor merged.mp4 --export final-cut-pro --margin 0.1sec');

    // Clean up concat-list.txt
    await fs.unlink('concat-list.txt');
    console.log(title('All done! 🎉'));
  } catch (err) {
    console.error(error(err.toString()));
  }
}

// Helper function to wrap exec in a promise
function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err);
      else resolve({ stdout, stderr });
    });
  });
}

main();