"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
function stringifyDate(stringifier) {
    stringifier.string += `date^${String(this.getTime())}`;
}
// @ts-ignore
Date.prototype[utils_1.stringify] = stringifyDate;
exports.default = stringifyDate;
