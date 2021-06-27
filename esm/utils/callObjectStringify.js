import stringify from './stringify';
import handleError from './handleError';
function callObjectStringify(value, stringifier) {
    try {
        // @ts-ignore
        Object.prototype[stringify].call(value, stringifier);
    }
    catch (error) {
        handleError(error);
    }
}
export default callObjectStringify;
