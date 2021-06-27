import type { IStringifier, StringifierOptions } from './types';
declare class Stringifier implements IStringifier {
    /**
     * Stringifier options.
     */
    readonly options: StringifierOptions;
    /**
     * Accumulator string.
     */
    string: string;
    constructor(options?: StringifierOptions);
    /**
     * Stringifies value and append it to current accumulator string.
     */
    update(value: any): void;
}
export default Stringifier;
