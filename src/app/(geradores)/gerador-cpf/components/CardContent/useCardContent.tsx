import { useMemo, useState } from "react";
import { enqueueSnackbar } from "notistack";
import CPFGenerator from "@/utils/generators/CPFGenerator";

export default function useCardContent() {
  const [CPF, setCPF] = useState("");
  const [hasFormatting, setHasFormatting] = useState(true);

  const cpfWithFormattingButtonLabel = useMemo(
    () => (!hasFormatting ? "Aplicar formatação" : "Retirar formatação"),
    [hasFormatting]
  );

  function handleCPFGeneration() {
    setCPF(CPFGenerator());
  }

  function handleCopyCPF() {
    navigator.clipboard
      .writeText(CPF)
      .then(() => {
        enqueueSnackbar("CPF copiado para a área de transferência!", {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar("Erro ao copiar o CPF!", {
          variant: "error",
        });
      });
  }

  function handleRemoveFormatting() {
    if (CPF && hasFormatting) {
      const unformattedCPF = CPF.replace(/\D/g, "");

      setHasFormatting(false);

      return setCPF(unformattedCPF);
    }

    if (CPF && !hasFormatting) {
      const formattedCPF = CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

      setHasFormatting(true);

      return setCPF(formattedCPF);
    }
  }

  return {
    CPF,
    cpfWithFormattingButtonLabel,
    handleCPFGeneration,
    handleCopyCPF,
    handleRemoveFormatting,
  };
}
