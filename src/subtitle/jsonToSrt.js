/**
 * @param {string} filePath
 **/

import fs from "fs";

function toTimeCode(time_ms) {
  let date = new Date(0);
  date.setMilliseconds(time_ms); // specify value for ms here
  let timeString = date.toISOString().substring(11, 23).replace(".", ",");
  return timeString;
}

function jsonToSrt(filePath) {
  // Change filepath extension from anything to .json
  const jsonFilePath = filePath.replace(/\.[^/.]+$/, ".json");

  let subtitleString = "";
  let indexCounter = 1;
  const subtitleFile = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
  subtitleFile.segments.forEach((segment, index) => {
    segment.words.forEach((word, index) => {
      if (word.start == word.end) {
        return;
      } // This makes FCPX freak the frick out but I hope it doesnt happen enough for it to become an issue :)

      subtitleString += `${indexCounter}\n`;
      subtitleString += `${toTimeCode(word.start * 1000)} --> ${toTimeCode(
        word.end * 1000
      )}\n`;
      subtitleString += `${word.word.trim()}\n\n`;
      indexCounter++;
    });
  });
  // Save to SRT file
  fs.writeFileSync(filePath.replace(/\.[^/.]+$/, ".srt"), subtitleString);
}

// TESTING
// jsonToSrt("./src/subtitle/testing.m4v");

export default jsonToSrt;
