const DEfAULT_ALPHABET = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export class NumberToAlphabet {
  private readonly _alphabetLength: number;

  constructor(private _alphabet = DEfAULT_ALPHABET) {
    if (_alphabet.length <= 0) {
      throw new Error('Alphabet must contain at least 1 item.');
    }
    this._alphabet.forEach((letter) => {
      if (typeof letter !== 'string' || letter.length !== 1) {
        throw new Error('Each item in the alphabet must be a single letter.');
      }
    });
    this._alphabetLength = _alphabet.length;
  }

  public numberToString(number: number): string {
    if (typeof number !== 'number') {
      throw new Error('Must be a nunber.');
    }
    if (number <= 0) {
      throw new RangeError('Number must be > 0.');
    }
    let res = '';
    let a = number - 1;
    while (true) {
      const remainder = a % this._alphabetLength;
      res = this._alphabet[remainder] + res;
      if (a < this._alphabetLength) {
        break;
      }
      a = Math.floor(a / this._alphabetLength) - 1;
    }
    return res;
  }

  public stringToNumber(input: string): number {
    if (!input.length) {
      throw new Error('Input must not be empty.');
    }
    return input
      .split('')
      .reverse()
      .reduce((acc, letter, i) => {
        const offset = this._alphabet.indexOf(letter);
        if (offset <= -1) {
          throw new Error(`Letter missing from alphabet: ${letter}`);
        }
        return acc + (offset + 1) * Math.pow(this._alphabetLength, i);
      }, 0);
  }
}
