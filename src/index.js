#!/usr/bin/env node

import cutVideo from "./cut/cutVideo.js";

if (process.argv[2] === "cut") {
  const args = process.argv.slice(3);

  args.forEach((filename) => {
    cutVideo(filename);
  });
}

if (process.argv[2] === undefined) {
  console.log("Usage: auto-editor cut <filename>");
}
