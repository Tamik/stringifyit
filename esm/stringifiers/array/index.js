import { stringify } from '../../utils';
import stringifyit from '../../stringifyit';
function stringifyArray(stringifier, forceSort) {
    let index = this.length;
    stringifier.string += '[';
    if (forceSort || stringifier.options.sortArrays) {
        const arrayOfStrings = [];
        while (index-- > 0) {
            arrayOfStrings.push(stringifyit(this[index], stringifier.options));
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
Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Int8Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Uint8Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Uint8ClampedArray.prototype[stringify] = stringifyArray;
// @ts-ignore
Int16Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Uint16Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Int32Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Uint32Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Float32Array.prototype[stringify] = stringifyArray;
// @ts-ignore
Float64Array.prototype[stringify] = stringifyArray;
export default stringifyArray;
