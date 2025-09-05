export default function RGGenerator(isFormatted: boolean = true): string {
  const digits = [];

  for (let i = 0; i < 8; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  function calculateCheckDigit(digits: number[]): string {
    const weights = [2, 3, 4, 5, 6, 7, 8, 9];

    const sum = digits.map((digit, i) => digit * weights[weights.length - 1 - i]).reduce((acc, val) => acc + val, 0);

    const remainder = sum % 11;
    const checkDigit = 11 - remainder;

    if (checkDigit === 10) return "X";
    if (checkDigit === 11) return "0";

    return String(checkDigit);
  }

  const checkDigit = calculateCheckDigit(digits);
  const rg = [...digits, checkDigit].join("");

  const formattedRG = rg.replace(/^(\d{2})(\d{3})(\d{3})([0-9X])$/, "$1.$2.$3-$4");

  return isFormatted ? formattedRG : rg;
}
