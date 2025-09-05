import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ReactNode } from "react";

interface IRootCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function RootCard({ title, description, children }: IRootCardProps) {
  return (
    <Card className="w-xs md:w-md lg:min-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {children}
    </Card>
  );
}
