"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var getAllVideoFiles = function (dirPath) {
    var files = fs_1.default.readdirSync(dirPath);
    var videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.m4v']; // add more extensions as needed
    var videoFiles = [];
    files.forEach(function (file) {
        var filePath = path_1.default.join(dirPath, file);
        var stat = fs_1.default.statSync(filePath);
        if (stat.isDirectory()) {
            videoFiles.push.apply(videoFiles, getAllVideoFiles(filePath));
        }
        else if (videoExtensions.includes(path_1.default.extname(filePath))) {
            videoFiles.push(filePath);
        }
    });
    return videoFiles;
};
exports.default = getAllVideoFiles;
