import Image from "next/image";
import Reveal from "./Reveal";
import { IconGear, IconDelivery, IconWrench } from "./Icons";

const BLOCKS = [
  {
    icon: IconGear,
    title: "Engenharia Industrial",
    description:
      "Projetos e soluções de engenharia para operadores da indústria de petróleo e gás.",
  },
  {
    icon: IconDelivery,
    title: "Apoio Logístico Marítimo",
    description:
      "Coordenação de meios marítimos e logística de suporte a operações offshore.",
  },
  {
    icon: IconWrench,
    title: "Reparação de Embarcações Offshore",
    description:
      "Manutenção e reparação especializada para unidades de apoio offshore.",
  },
];

export default function OffshoreSection() {
  return (
    <section id="offshore" className="relative overflow-hidden bg-navy-deep py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/offshoreoilgas.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-accent">Offshore Oil &amp; Gas</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Suporte técnico onde a operação não pode parar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {BLOCKS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass-dark flex h-full flex-col gap-5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
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
