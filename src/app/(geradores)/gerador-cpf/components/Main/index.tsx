import RootCard from "@/components/RootCard";
import CardContent from "../CardContent";

export default function Main() {
  return (
    <main className="h-full w-full flex-1 pb-36">
      <div className="h-full flex items-center justify-between gap-4 my-auto">
        <RootCard title="Gerador de CPF" description="Clique no botão abaixo para gerar um CPF válido.">
          <CardContent />
        </RootCard>

        <div className="w-3xs h-[90%] bg-white" />
      </div>
    </main>
  );
}
