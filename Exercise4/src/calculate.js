const regexWithBracket = /\(([-]*\d+\.*\d*)([+]|[-]|[*]|[/])([-]*\d+\.*\d*)\)/;
const regexHighPriority = /([-]*\d+\.*\d*)([*]|[/])([-]*\d+\.*\d*)/;
const regexLowPriority = /([-]*\d+\.*\d*)([+]|[-])([-]*\d+\.*\d*)/;

const callback = (...params) => {
  switch (params[2]) {
    case "+":
      return Number(params[1]) + Number(params[3]);
    case "-":
      return Number(params[1]) - Number(params[3]);
    case "*":
      return Number(params[1]) * Number(params[3]);
    case "/":
      return Number(params[1]) / Number(params[3]);
    default:
      throw Error("Regex is incorrectly defined");
  }
};

const calculate = (input) => {
  if (regexWithBracket.test(input))
    return calculate(input.replace(regexWithBracket, callback));
  if (regexHighPriority.test(input))
    return calculate(input.replace(regexHighPriority, callback));
  if (regexLowPriority.test(input))
    return calculate(input.replace(regexLowPriority, callback));
  return input;
};

exports.calculate = calculate;
