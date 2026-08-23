import Image from "next/image";
import Reveal from "./Reveal";
import { IconArrowUpRight } from "./Icons";

const VESSEL_TYPES = [
  "Barcos de Fibra",
  "Embarcações Artesanais",
  "Semi-industriais",
  "Industriais",
  "Rebocadores",
  "Landing Crafts",
  "Barges",
  "Apoio Offshore",
];

export default function FeaturedConstruction() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        <Reveal>
          <p className="kicker text-accent">Construção Naval em Destaque</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Cada casco, construído para o mar que vai enfrentar.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
            Da fibra de vidro ao aço naval, dimensionamos e construímos a
            embarcação certa para cada operação — pesca, transporte ou apoio
            offshore.
          </p>

          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {VESSEL_TYPES.map((type, i) => (
              <li
                key={type}
                className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-fog"
              >
                <div className="flex items-center gap-4">
                  <span className="kicker w-7 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold text-navy">
                    {type}
                  </span>
                </div>
                <IconArrowUpRight className="h-4 w-4 shrink-0 text-navy/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 lg:aspect-auto lg:h-full">
            <Image
              src="/construcaonaval.jpg"
              alt="Embarcação moderna em construção"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>

          <div className="glass-dark absolute bottom-8 left-8 right-8 rounded-2xl p-5 sm:right-auto sm:w-72">
            <p className="kicker text-white/60">Especificação</p>
            <p className="mt-2 font-display text-lg font-semibold text-white">
              Casco em aço naval
            </p>
            <p className="mt-1 text-sm text-white/70">
              Dimensionado para operação offshore prolongada
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
