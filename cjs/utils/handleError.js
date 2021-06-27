"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
function handleError(error) {
    if (error instanceof RangeError) {
        throw new errors_1.StringifierRangeError();
    }
    throw error;
}
exports.default = handleError;
