import Reveal from "./Reveal";
import {
  IconClipboard,
  IconCompass,
  IconWeld,
  IconShieldCheck,
  IconDelivery,
} from "./Icons";

const STEPS = [
  {
    icon: IconClipboard,
    title: "Consulta Técnica",
    description: "Levantamento do requisito operacional e do âmbito do projeto.",
  },
  {
    icon: IconCompass,
    title: "Projeto & Arquitetura",
    description: "Arquitetura naval, cálculo estrutural e desenho técnico.",
  },
  {
    icon: IconWeld,
    title: "Construção / Reparação",
    description: "Execução no estaleiro, com controlo de qualidade contínuo.",
  },
  {
    icon: IconShieldCheck,
    title: "Testes & Certificação",
    description: "Inspeções, provas de mar e certificação técnica.",
  },
  {
    icon: IconDelivery,
    title: "Entrega",
    description: "Entrega da embarcação e transferência de documentação.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-accent">Processo de Trabalho</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Cinco etapas, do requisito à entrega.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-navy/10 lg:block"
          />
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <li className="relative flex flex-col gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-navy">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="kicker text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
