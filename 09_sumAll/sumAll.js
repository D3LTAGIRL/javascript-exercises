const sumAll = function(int1, int2) {
  // check if parameters are non integer
  if (!Number.isSafeInteger(int1) || !Number.isSafeInteger(int2))
    return "ERROR";
  // check if parameters are negative
  if (int1 < 0 || int2 < 0)
    return "ERROR";
  const args = [...arguments];
  args.sort();
  sum = 0;
  for (let i = args[0]; i <= args[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
