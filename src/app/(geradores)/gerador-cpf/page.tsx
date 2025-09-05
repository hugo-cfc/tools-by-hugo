import type { Metadata } from "next";
import Main from "./components/Main";

export const metadata: Metadata = {
  title: "Gerador de CPF válido – Hugo Tools",
  description: "Gere CPFs válidos para testes de forma rápida e gratuita. Ferramenta para desenvolvedores e QA.",
  // alternates: {
  //   canonical: "/gerador-cpf",
  // },
  // openGraph: {
  //   title: "Gerador de CPF válido – Hugo Tools",
  //   description: "Gere CPFs válidos para testes de forma rápida e gratuita. Ferramenta para desenvolvedores e QA.",
  //   url: "/gerador-cpf",
  //   siteName: "Hugo Tools",
  //   locale: "pt-BR",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Gerador de CPF válido – Hugo Tools",
  //   description: "Gere CPFs válidos para testes de forma rápida e gratuita. Ferramenta para desenvolvedores e QA.",
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: true,
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
  // themeColor: "#ffffff",
  // metadataBase: new URL("https://hugotools.com.br"),
};

export default function GeradorCPF() {
  return <Main />;
}
