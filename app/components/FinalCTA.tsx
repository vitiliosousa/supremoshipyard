import Image from "next/image";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src="/offshoreoilgas.jpg"
          alt="Operação marítima ao entardecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-accent/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <Reveal>
          <p className="kicker text-accent">Vamos Trabalhar Juntos</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white">
            Prontos para desenvolver o seu próximo projeto marítimo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Soluções em construção, engenharia e reparação naval para
            governos, indústria pesqueira, operadores offshore e o setor
            privado.
          </p>
          <a
            href="mailto:geral@supremoshipyard.co.mz"
            className="mt-10 inline-block rounded-full bg-accent px-9 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Entrar em Contacto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
