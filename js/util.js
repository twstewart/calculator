function numFormatter(num) {
  return new Intl.NumberFormat(undefined).format(num);
}

export function displayNum(num) {
  const numStr = num?.toString() || "";
  if (numStr === "") {
    return "";
  }

  const [int, decimal] = numStr.split(".");
  const formattedInt = numFormatter(int);

  if (decimal === undefined) {
    return formattedInt;
  }

  return formattedInt + "." + decimal;
}
