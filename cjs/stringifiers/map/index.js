"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const stringifyit_1 = __importDefault(require("../../stringifyit"));
function compareMapItems(item1, item2) {
    const key1 = item1[0];
    const key2 = item2[0];
    if (key1 === key2) {
        const value1 = item1[1];
        const value2 = item2[1];
        return value1 === value2 ? 0 : value1 > value2 ? 1 : -1;
    }
    return key1 > key2 ? 1 : -1;
}
function stringifyMap(stringifier) {
    const array = [];
    const mapArray = Array.from(this);
    stringifier.string += 'map^[[';
    for (let i = 0; i < mapArray.length; i++) {
        const item = mapArray[i];
        array.push([stringifyit_1.default(item[0], stringifier.options), stringifyit_1.default(item[1], stringifier.options)]);
    }
    stringifier.string += `${array.sort(compareMapItems).join('')}]]`;
}
// @ts-ignore
Map.prototype[utils_1.stringify] = stringifyMap;
// @ts-ignore
WeakMap.prototype[utils_1.stringify] = stringifyMap;
exports.default = stringifyMap;
