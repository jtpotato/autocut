import fs from 'fs';
import path from 'path';

const getAllVideoFiles = (dirPath: string): string[] => {
  const files = fs.readdirSync(dirPath);
  const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.m4v']; // add more extensions as needed
  const videoFiles: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      videoFiles.push(...getAllVideoFiles(filePath));
    } else if (videoExtensions.includes(path.extname(filePath))) {
      videoFiles.push(filePath);
    }
  });

  return videoFiles;
};

export default getAllVideoFiles;