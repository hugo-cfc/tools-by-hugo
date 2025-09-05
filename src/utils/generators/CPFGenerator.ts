export default function CPFGenerator(isFormatted: boolean = true): string {
  const digits = [];

  for (let i = 0; i < 9; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  function calculateCheckDigit(base: number[]) {
    const sum = base.reduce((acc, num, index) => acc + num * (base.length + 1 - index), 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  const checkDigit1 = calculateCheckDigit(digits);
  const checkDigit2 = calculateCheckDigit([...digits, checkDigit1]);

  const cpf = [...digits, checkDigit1, checkDigit2].join("");

  const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return isFormatted ? formattedCPF : cpf;
}
