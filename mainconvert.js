import {converts} from `./convert.mjs`;
const amt = 100;
const from = 'USD';
const to= 'EURO';
const convertedAmt= convert(amt, from, to);
console.log(`${amt} ${from} is equal to ${convertedAmt} ${to}`);

