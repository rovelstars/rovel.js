export declare class NumberToAlphabet {
    private _alphabet;
    private readonly _alphabetLength;
    constructor(_alphabet?: string[]);
    numberToString(number: number): string;
    stringToNumber(input: string): number;
}
