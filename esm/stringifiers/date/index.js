import { stringify } from '../../utils';
function stringifyDate(stringifier) {
    stringifier.string += `date^${String(this.getTime())}`;
}
// @ts-ignore
Date.prototype[stringify] = stringifyDate;
export default stringifyDate;
