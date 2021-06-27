import { stringify } from '../../utils';
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
Object.prototype[stringify] = stringifyObject;
export default stringifyObject;
