import { StringifierRangeError } from '../errors';
function handleError(error) {
    if (error instanceof RangeError) {
        throw new StringifierRangeError();
    }
    throw error;
}
export default handleError;
