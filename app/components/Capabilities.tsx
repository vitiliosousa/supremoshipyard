import Reveal from "./Reveal";
import {
  IconHull,
  IconCompass,
  IconWrench,
  IconWeld,
  IconCertificate,
  IconDelivery,
} from "./Icons";

const CAPABILITIES = [
  {
    icon: IconHull,
    label: "Construção de Embarcações",
    description: "Fibra de vidro e aço naval, para pesca, apoio offshore e transporte.",
  },
  {
    icon: IconCompass,
    label: "Engenharia Especializada",
    description: "Arquitetura naval, projeto e fiscalização técnica.",
  },
  {
    icon: IconWrench,
    label: "Reparações Complexas",
    description: "Docagem, modernização e sistemas elétricos e eletrónicos.",
  },
  {
    icon: IconWeld,
    label: "Estruturas Metálicas",
    description: "Caldeiraria, tubagens industriais e soldadura especializada.",
  },
  {
    icon: IconCertificate,
    label: "Soldadura Certificada",
    description: "Formação e certificação técnica em soldadura e mecânica naval.",
  },
  {
    icon: IconDelivery,
    label: "Logística Integrada",
    description: "Apoio logístico marítimo para operações offshore.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-navy py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-accent">Capacidades Industriais</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Um só estaleiro, capacidade para todo o ciclo naval.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ icon: Icon, label, description }, i) => (
            <Reveal key={label} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col gap-4 bg-navy p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-base font-semibold text-white">{label}</p>
                <p className="text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
