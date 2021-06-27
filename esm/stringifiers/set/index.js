import { stringify } from '../../utils';
function stringifySet(stringifier) {
    stringifier.string += 'set^';
    Array.from(this)[stringify](stringifier, true);
}
// @ts-ignore
Set.prototype[stringify] = stringifySet;
// @ts-ignore
WeakSet.prototype[stringify] = stringifySet;
export default stringifySet;
