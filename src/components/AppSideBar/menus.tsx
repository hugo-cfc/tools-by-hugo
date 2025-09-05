import { Sparkles } from "lucide-react";

const menus = {
  navMain: [
    {
      title: "Geradores",
      url: "#",
      icon: Sparkles,
      isActive: true,
      items: [
        {
          title: "Gerador de CPF",
          url: "/gerador-cpf",
        },
        {
          title: "Gerador de CNPJ",
          url: "/gerador-cnpj",
        },
        {
          title: "Gerador de RG",
          url: "/gerador-rg",
        },
        // {
        //   title: "Gerador de Endereços",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Nomes",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Emails",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Telefones",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Senhas",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Texto Aleatório",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Dados Falsos",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Dados Aleatórios",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Códigos QR",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Imagens Aleatórias",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Emojis",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Hashtags",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Nomes de Usuário",
        //   url: "#",
        // },
        // {
        //   title: "Gerador de Nomes de Domínio",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "Conversores",
    //   url: "#",
    //   icon: ArrowLeftRight,
    //   items: [
    //     {
    //       title: "Conversor de Moedas",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Temperatura",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Unidades",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Medidas",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Tempo",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Texto",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Base64",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de JSON",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de XML",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de HTML",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Markdown",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de CSV",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de YAML",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Texto para Fala",
    //       url: "#",
    //     },
    //     {
    //       title: "Conversor de Fala para Texto",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Utilitários",
    //   url: "#",
    //   icon: Wrench,
    //   items: [
    //     {
    //       title: "Calculadora",
    //       url: "#",
    //     },
    //     {
    //       title: "Cronômetro",
    //       url: "#",
    //     },
    //     {
    //       title: "Relógio Mundial",
    //       url: "#",
    //     },
    //     {
    //       title: "Agenda de Contatos",
    //       url: "#",
    //     },
    //     {
    //       title: "Lista de Tarefas",
    //       url: "#",
    //     },
    //     {
    //       title: "Gerador de Senhas",
    //       url: "#",
    //     },
    //     {
    //       title: "Gerador de Nomes Aleatórios",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Calculadoras",
    //   url: "#",
    //   icon: Calculator,
    //   items: [
    //     {
    //       title: "Calculadora Científica",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora Financeira",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Juros Compostos",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de IMC",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Conversão de Moedas",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Porcentagem",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Desconto",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Lucro",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Preço de Venda",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Custo",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Margem de Lucro",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Taxa de Juros",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Amortização",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Financiamento",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Empréstimo",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Parcelamento",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Renda Fixa",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Renda Variável",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Previdência Privada",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Aposentadoria",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Poupança",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Investimentos",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Ações",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Fundos Imobiliários",
    //       url: "#",
    //     },
    //     {
    //       title: "Calculadora de Criptomoedas",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export default menus;
