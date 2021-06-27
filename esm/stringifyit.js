import Stringifier from './Stringifier';
function stringifyit(value, options) {
    const stringifier = new Stringifier(options);
    stringifier.update(value);
    return stringifier.string;
}
export default stringifyit;
