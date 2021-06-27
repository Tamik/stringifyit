"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
function stringifyObject(stringifier) {
    const keys = Object.keys(this).sort();
    let key;
    stringifier.string += '{';
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        stringifier.string += key;
        stringifier.update(this[key]);
    }
    stringifier.string += '}';
}
// @ts-ignore
Object.prototype[utils_1.stringify] = stringifyObject;
exports.default = stringifyObject;
