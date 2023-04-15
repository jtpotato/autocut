"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var getvideofiles_1 = __importDefault(require("../utils/getvideofiles"));
var child_process_1 = require("child_process");
var gradients_1 = require("../utils/gradients");
function CutApp(inputFilePath) {
    // get all files in path.
    var videoFiles = (0, getvideofiles_1.default)(inputFilePath);
    // cut each video
    fs_1.default.mkdirSync(path_1.default.join("output", inputFilePath), { recursive: true });
    for (var _i = 0, videoFiles_1 = videoFiles; _i < videoFiles_1.length; _i++) {
        var videoFile = videoFiles_1[_i];
        var autoEditor = (0, child_process_1.spawn)("auto-editor", [
            videoFile,
            "--margin",
            "0.1sec",
            "-o",
            path_1.default.join("output", videoFile),
        ]);
        autoEditor.on("error", function () {
            console.log((0, gradients_1.debug)("auto-editor may not be up to date... Fixing..."));
            var pip = (0, child_process_1.spawn)("pip", ["install", "auto-editor", "--upgrade"]);
            pip.on("close", function (code) {
                console.log((0, gradients_1.emphasis)("Try running it again."));
            });
        });
        autoEditor.stdout.on("data", function (data) {
            console.log(data.toString());
        });
    }
}
exports.default = CutApp;
