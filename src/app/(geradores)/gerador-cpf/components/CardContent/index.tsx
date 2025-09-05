"use client";

import { CardAction, CardContent as RadixCardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import useCardContent from "./useCardContent";

export default function CardContent() {
  const { CPF, cpfWithFormattingButtonLabel, handleCPFGeneration, handleCopyCPF, handleRemoveFormatting } =
    useCardContent();

  return (
    <>
      <RadixCardContent>
        <div className="flex items-center gap-2">
          <Input type="text" value={CPF} readOnly />

          <Button onClick={handleCopyCPF} disabled={!CPF} variant="outline" className="h-10">
            <Copy />
          </Button>
        </div>
      </RadixCardContent>

      <CardAction className="w-full flex justify-end px-6 gap-2">
        <Button onClick={handleRemoveFormatting} variant="outline" disabled={!CPF}>
          {cpfWithFormattingButtonLabel}
        </Button>

        <Button onClick={handleCPFGeneration}>Gerar CPF</Button>
      </CardAction>
    </>
  );
}
