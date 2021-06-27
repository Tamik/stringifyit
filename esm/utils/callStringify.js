import stringify from './stringify';
import handleError from './handleError';
function callStringify(value, stringifier) {
    try {
        value[stringify](stringifier);
    }
    catch (error) {
        handleError(error);
    }
}
export default callStringify;
