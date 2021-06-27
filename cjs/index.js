"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyit = exports.default = exports.stringify = void 0;
/**
 * Loading custom stringifiers for object instances.
 */
require("./stringifiers");
__exportStar(require("./types"), exports);
__exportStar(require("./errors"), exports);
var utils_1 = require("./utils");
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return utils_1.stringify; } });
var Stringifier_1 = require("./Stringifier");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(Stringifier_1).default; } });
var stringifyit_1 = require("./stringifyit");
Object.defineProperty(exports, "stringifyit", { enumerable: true, get: function () { return __importDefault(stringifyit_1).default; } });
