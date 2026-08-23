import type { ComponentType } from "react";
import {
  IconHull,
  IconCompass,
  IconWrench,
  IconRig,
  IconWeld,
  IconCertificate,
  IconExport,
  IconSpark,
} from "./Icons";

export type Specialization = {
  code: string;
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  items: string[];
};

export const SPECIALIZATIONS: Specialization[] = [
  {
    code: "01",
    title: "Construção Naval",
    description:
      "Da fibra de vidro ao aço naval — embarcações de pesca, rebocadores, landing crafts, barges e unidades offshore.",
    image: "/construcaonaval.jpg",
    icon: IconHull,
    items: [
      "Embarcações em fibra de vidro",
      "Pesca artesanal",
      "Pesca semi-industrial",
      "Pesca industrial",
      "Rebocadores",
      "Landing Crafts",
      "Barges",
      "Embarcações Offshore",
    ],
  },
  {
    code: "02",
    title: "Engenharia Naval",
    description:
      "Arquitetura naval, projetos, consultoria e fiscalização técnica de projetos marítimos.",
    image: "/engenharianaval.jpg",
    icon: IconCompass,
    items: [
      "Arquitetura naval",
      "Projetos",
      "Consultoria",
      "Gestão de projetos",
      "Fiscalização técnica",
    ],
  },
  {
    code: "03",
    title: "Reparação Naval",
    description:
      "Docagem, manutenção, inspeções, modernização e sistemas elétricos e eletrónicos.",
    image: "/reparacaonaval.jpg",
    icon: IconWrench,
    items: [
      "Docagem",
      "Manutenção",
      "Inspeções",
      "Modernização",
      "Sistemas elétricos e eletrónicos",
    ],
  },
  {
    code: "04",
    title: "Offshore Oil & Gas",
    description:
      "Apoio logístico, reparação offshore, engenharia industrial, fabricação e montagem.",
    image: "/offshoreoilgas.jpg",
    icon: IconRig,
    items: [
      "Apoio logístico",
      "Reparação offshore",
      "Engenharia industrial",
      "Fabricação e montagem",
    ],
  },
  {
    code: "05",
    title: "Metalomecânica",
    description:
      "Estruturas metálicas, caldeiraria, tubagens industriais e soldadura especializada.",
    image: "/metalomecanica.jpg",
    icon: IconWeld,
    items: [
      "Estruturas metálicas",
      "Caldeiraria",
      "Tubagens industriais",
      "Soldadura especializada",
    ],
  },
  {
    code: "06",
    title: "Formação Profissional",
    description:
      "Mecânica naval, soldadura naval, formação marítima e certificação técnica.",
    image: "/formacaoprofissional.jpg",
    icon: IconCertificate,
    items: [
      "Mecânica naval",
      "Soldadura naval",
      "Formação marítima",
      "Certificação técnica",
    ],
  },
  {
    code: "07",
    title: "Comércio & Exportação",
    description:
      "Equipamentos marítimos, importação, exportação e representação de marcas internacionais.",
    image: "/comercioeexportacao.jpg",
    icon: IconExport,
    items: [
      "Equipamentos marítimos",
      "Importação",
      "Exportação",
      "Representação de marcas",
    ],
  },
  {
    code: "08",
    title: "Inovação & Parcerias",
    description:
      "Tecnologia marítima, energias complementares, consórcios internacionais e projetos sustentáveis.",
    image: "/inovacaoeparcerias.jpg",
    icon: IconSpark,
    items: [
      "Tecnologia marítima",
      "Energias complementares",
      "Consórcios internacionais",
      "Projetos sustentáveis",
    ],
  },
];
