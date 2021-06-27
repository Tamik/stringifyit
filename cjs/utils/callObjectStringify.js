"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringify_1 = __importDefault(require("./stringify"));
const handleError_1 = __importDefault(require("./handleError"));
function callObjectStringify(value, stringifier) {
    try {
        // @ts-ignore
        Object.prototype[stringify_1.default].call(value, stringifier);
    }
    catch (error) {
        handleError_1.default(error);
    }
}
exports.default = callObjectStringify;
