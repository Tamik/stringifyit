"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const stringifyit_1 = __importDefault(require("../../stringifyit"));
function stringifyArray(stringifier, forceSort) {
    let index = this.length;
    stringifier.string += '[';
    if (forceSort || stringifier.options.sortArrays) {
        const arrayOfStrings = [];
        while (index-- > 0) {
            arrayOfStrings.push(stringifyit_1.default(this[index], stringifier.options));
        }
        stringifier.string += arrayOfStrings.sort().join('');
    }
    else {
        while (index-- > 0) {
            stringifier.update(this[index]);
        }
    }
    stringifier.string += ']';
}
// @ts-ignore
Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Int8Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Uint8Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Uint8ClampedArray.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Int16Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Uint16Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Int32Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Uint32Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Float32Array.prototype[utils_1.stringify] = stringifyArray;
// @ts-ignore
Float64Array.prototype[utils_1.stringify] = stringifyArray;
exports.default = stringifyArray;
