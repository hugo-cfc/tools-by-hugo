export default function CNPJGenerator(isFormatted: boolean = true): string {
  const baseDigits = [];

  for (let i = 0; i < 8; i++) {
    baseDigits.push(Math.floor(Math.random() * 10));
  }

  baseDigits.push(0, 0, 0, 1);

  function calculateCheckDigit(digits: number[], weights: number[]) {
    const sum = digits.reduce((acc, digit, index) => acc + digit * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const checkDigit1 = calculateCheckDigit(baseDigits, firstWeights);
  const checkDigit2 = calculateCheckDigit([...baseDigits, checkDigit1], secondWeights);

  const cnpj = [...baseDigits, checkDigit1, checkDigit2].join("");

  const formattedCNPJ = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

  return isFormatted ? formattedCNPJ : cnpj;
}
