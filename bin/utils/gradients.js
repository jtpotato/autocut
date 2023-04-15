"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.title = exports.emphasis = exports.debug = exports.error = void 0;
var gradient_string_1 = __importDefault(require("gradient-string"));
var error = (0, gradient_string_1.default)("#ff0000", "#ff0090");
exports.error = error;
var debug = (0, gradient_string_1.default)("#573500", "#4a4a4a");
exports.debug = debug;
var emphasis = (0, gradient_string_1.default)("#3077D9", "#0BBAD5");
exports.emphasis = emphasis;
var title = (0, gradient_string_1.default)("#f7cfb4", "#e26fb6");
exports.title = title;
