"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
function stringifySet(stringifier) {
    stringifier.string += 'set^';
    Array.from(this)[utils_1.stringify](stringifier, true);
}
// @ts-ignore
Set.prototype[utils_1.stringify] = stringifySet;
// @ts-ignore
WeakSet.prototype[utils_1.stringify] = stringifySet;
exports.default = stringifySet;
