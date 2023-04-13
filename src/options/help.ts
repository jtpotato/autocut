import { emphasis, title } from "../logging";

export function Help() {
  const helpString =
`${title("COMMAND OPTIONS:")}
    ${emphasis("-h, --help:")} Show this help message
${title("APPS:")}
    ${emphasis("cut:")} Automatically assemble and edit videos.
        ${emphasis("-i, --input:")} Path to input video folder.
`;

  console.log(helpString);
}
