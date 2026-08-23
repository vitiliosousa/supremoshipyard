import Image from "next/image";
import Reveal from "./Reveal";
import { IconCertificate } from "./Icons";

const PROGRAMS = [
  "Formação marítima",
  "Mecânica naval",
  "Soldadura",
  "Certificação profissional",
];

export default function Training() {
  return (
    <section id="formacao" className="bg-fog py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-12">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy/15 lg:aspect-[4/5]">
            <Image
              src="/formacaoprofissional.jpg"
              alt="Técnicos em formação profissional marítima"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="kicker text-accent">Formação Profissional</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Formamos quem vai construir o próximo casco.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
            A construção e a reparação naval dependem de mão de obra
            certificada. Formamos os nossos próprios técnicos — e abrimos
            essa formação a profissionais de fora do estaleiro.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-4">
            {PROGRAMS.map((program) => (
              <li
                key={program}
                className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3.5"
              >
                <IconCertificate className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-navy">
                  {program}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-9 inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Saber Mais Sobre a Formação
          </a>
        </Reveal>
      </div>
    </section>
  );
}
