"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stringifier_1 = __importDefault(require("./Stringifier"));
function stringifyit(value, options) {
    const stringifier = new Stringifier_1.default(options);
    stringifier.update(value);
    return stringifier.string;
}
exports.default = stringifyit;
