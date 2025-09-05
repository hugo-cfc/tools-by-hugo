"use client";

import { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import CNPJGenerator from "@/utils/generators/CNPJGenerator";

export default function GeradorCPF() {
  const [CNPJ, setCNPJ] = useState("");

  function handleCNPJGeneration() {
    setCNPJ(CNPJGenerator());
  }

  function handleCopyCNPJ() {
    navigator.clipboard
      .writeText(CNPJ)
      .then(() => {
        enqueueSnackbar("CNPJ copiado para a área de transferência!", {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar("Erro ao copiar o CNPJ!", {
          variant: "error",
        });
      });
  }

  function handleRemoveFormatting() {
    if (CNPJ) {
      const unformattedCNPJ = CNPJ.replace(/\D/g, "");

      setCNPJ(unformattedCNPJ);
    }
  }

  return (
    <div className="h-full w-full flex-1 pb-36">
      <div className="h-full flex items-center justify-between gap-4 my-auto">
        <Card className="w-xs md:w-md lg:min-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Gerador de CNPJ</CardTitle>
            <CardDescription>Clique no botão abaixo para gerar um CNPJ válido.</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <Input type="text" value={CNPJ} readOnly />

              <Button onClick={handleCopyCNPJ} disabled={!CNPJ} variant="outline" className="h-10">
                <Copy />
              </Button>
            </div>
          </CardContent>

          <CardAction className="w-full flex justify-end px-6 gap-2">
            <Button onClick={handleRemoveFormatting} variant="outline">
              Retirar formatação
            </Button>

            <Button onClick={handleCNPJGeneration}>Gerar CNPJ</Button>
          </CardAction>
        </Card>

        <div className="w-3xs h-[90%] bg-white" />
      </div>
    </div>
  );
}
