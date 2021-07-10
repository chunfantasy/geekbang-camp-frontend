const PRECISION = 12;

export const encode64 = (input) => {
  console.log(`Encode decimal to 64, input： ${input}`);
  if (isNaN(input)) throw new Error('Sorry, the input is not a number');

  const inputNumber = Number(input);
  const intPart = Math.trunc(inputNumber);
  const decPart = (inputNumber - intPart).toPrecision(PRECISION);
  console.log(`Integer part is ${intPart}`);
  console.log(`Decimal part is ${decPart}`);

  const chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ+/'.split('');
  console.log(chars.length);
  console.log(chars);

  let intPartResult = '';
  let intPartInput = intPart;
  while(true) {
    const quotient = Math.floor(intPartInput / chars.length);
    const remainder = intPartInput % chars.length;

    intPartResult = chars[remainder] + intPartResult;
    if (quotient > 0) {
      intPartInput = quotient;
    }
    else {
      break;
    }
  }

  let decPartResult = '';
  let decPartInput = decPart;
  let times = 0;
  while(times < PRECISION) {
    const quotient = Math.floor(decPartInput * chars.length);
    const remainder = (decPartInput * chars.length - quotient).toPrecision(PRECISION);

    decPartResult = decPartResult + chars[quotient];
    if (remainder !== 0) {
      decPartInput = remainder;
      times += 1;
    }
    else {
      break;
    }
  }

  const result = intPartResult + (decPartResult ? `.${decPartResult}` : '');

  return result;
}
