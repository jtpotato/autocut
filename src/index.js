#!/usr/bin/env node

import cutVideo from "./cut/cutVideo.js";
import randomUpgrade from "./setup/randomUpgrade.js";
import setup from "./setup/setup.js";
import subtitleVideo from "./subtitle/subtitleVideo.js";

if (process.argv[2] === "cut") {
  const args = process.argv.slice(3);

  args.forEach((filename) => {
    cutVideo(filename);
  });
  randomUpgrade()
}

if (process.argv[2] === "subtitle") {
  subtitleVideo(process.argv[3]);
  randomUpgrade()
}

if (process.argv[2] === "setup") {
  setup();
}

if (process.argv[2] === undefined || process.argv[2] === "help") {
  console.log("Usage: auto-editor <command> <filename(s)>");
}
