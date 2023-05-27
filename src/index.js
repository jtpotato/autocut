import cutVideo from "./utils/cutVideo";

if (process.argv[2] === "cut") {
  const args = process.argv.slice(3);

  args.forEach((filename) => {
    cutVideo(filename);
  });
}
