"use client";

import { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import RGGenerator from "@/utils/generators/RGGenerator";

export default function GeradorCPF() {
  const [RG, setRG] = useState("");

  function handleRGGeneration() {
    setRG(RGGenerator());
  }

  function handleCopyRG() {
    navigator.clipboard
      .writeText(RG)
      .then(() => {
        enqueueSnackbar("RG copiado para a área de transferência!", {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar("Erro ao copiar o RG!", {
          variant: "error",
        });
      });
  }

  function handleRemoveFormatting() {
    if (RG) {
      const unformattedRG = RG.replace(/\D/g, "");

      setRG(unformattedRG);
    }
  }

  return (
    <div className="h-full w-full flex-1 pb-36">
      <div className="h-full flex items-center justify-between gap-4 my-auto">
        <Card className="w-xs md:w-md lg:min-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Gerador de RG</CardTitle>
            <CardDescription>Clique no botão abaixo para gerar um RG válido.</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <Input type="text" value={RG} readOnly />

              <Button onClick={handleCopyRG} disabled={!RG} variant="outline" className="h-10">
                <Copy />
              </Button>
            </div>
          </CardContent>

          <CardAction className="w-full flex justify-end px-6 gap-2">
            <Button onClick={handleRemoveFormatting} variant="outline">
              Retirar formatação
            </Button>

            <Button onClick={handleRGGeneration}>Gerar RG</Button>
          </CardAction>
        </Card>

        <div className="w-3xs h-[90%] bg-white" />
      </div>
    </div>
  );
}
