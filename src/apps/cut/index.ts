import { ParsedArgs } from "minimist";
import { title, error, debug, warn } from "../../logging";
import * as fs from "fs";
import path = require("path");

const version = "v0.0.1";

function getFiles(folder: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      let sortedFiles = files.sort(function (a, b) {
        return (
          fs.statSync(path.join(folder + "/" + a)).birthtime.getTime() -
          fs.statSync(path.join(folder + "/" + b)).birthtime.getTime()
        );
      });
      resolve(sortedFiles);
    });
  });
}

function filterFiles(files: string[]) {
  return new Promise((resolve, reject) => {
    let allowedExtensions = [".mp4", ".mov", ".avi", ".mkv", ".m4v"];
    let filteredFiles = files.filter((file) => {
      if (allowedExtensions.includes(path.extname(file))) {
        return true;
      } else {
        console.log(
          warn(`Rejected ${file} as it is not a recognised video file.`)
        );
        return false;
      }
    });
    resolve(filteredFiles);
  });
}

export function Cut(args: ParsedArgs) {
  console.log(title(`Cut ${version}`));
  if (!args.input) {
    console.log(error("No input folder specified."));
    return;
  }

  getFiles(args.input).then((sortedFiles) => {
    filterFiles(sortedFiles).then((filteredFiles) => {
      debug(filteredFiles);
    });
  });
}
