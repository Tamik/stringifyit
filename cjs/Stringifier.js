"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Stringifier {
    constructor(options = {}) {
        this.options = options;
        this.string = '';
    }
    /**
     * Stringifies value and append it to current accumulator string.
     */
    update(value) {
        const type = typeof value;
        if (type !== 'object' || value === null) {
            if (this.options.includePrimitiveTypes) {
                this.string += `${type}^`;
            }
            this.string += String(value);
        }
        else if (!value.constructor) {
            utils_1.callObjectStringify(value, this);
        }
        else {
            if (this.options.includeConstructorNames) {
                this.string += value.constructor.name;
            }
            utils_1.callStringify(value, this);
        }
    }
}
exports.default = Stringifier;
