# Number-To-Alphabet
Convert a number to a string and vice versa, using the provided alphabet (or default of a-z).

## Installation
```shell
$ npm install number-to-alphabet
```

## Examples

```ts
import { NumberToAlphabet } from 'number-to-alphabet';

const defaultAlphabet = new NumberToAlphabet();
defaultAlphabet.numberToString(1);    // 'a'
defaultAlphabet.numberToString(2);    // 'b'
defaultAlphabet.numberToString(27);   // 'aa'
defaultAlphabet.numberToString(28);   // 'ab'
defaultAlphabet.stringToNumber('ab'); // 28

const customAlphabet = new NumberToAlphabet(['A', 'B']);
customAlphabet.numberToString(1);    // 'A'
customAlphabet.numberToString(2);    // 'B'
customAlphabet.numberToString(3);    // 'AA'
customAlphabet.numberToString(4);    // 'AB'
customAlphabet.stringToNumber('AB'); // 4
```
