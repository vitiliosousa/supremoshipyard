import Image from "next/image";
import Reveal from "./Reveal";

const VALUES = [
  "Excelência técnica",
  "Segurança",
  "Inovação",
  "Sustentabilidade",
  "Precisão industrial",
  "Parcerias internacionais",
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        <Reveal>
          <p className="kicker text-accent">Sobre a Supremo Shipyard</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Do projeto à entrega, uma engenharia marítima integrada.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel">
            A Supremo Shipyard Marine Engineering acompanha cada embarcação
            do primeiro esboço à doca de entrega. Reunimos, sob um único
            estaleiro, a construção naval, a engenharia e a reparação — para
            armadores da pesca, operadores de transporte marítimo e a
            indústria offshore de petróleo e gás.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-steel">
            Cada projeto é conduzido pelos mesmos princípios que definem o
            nosso trabalho no estaleiro:
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {VALUES.map((value) => (
              <li key={value} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-medium leading-snug text-navy">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
              <Image
                src="/construcaonaval.jpg"
                alt="Embarcação em construção no estaleiro"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
              <Image
                src="/metalomecanica.jpg"
                alt="Soldadores em trabalho de caldeiraria"
                fill
                sizes="(min-width: 1024px) 310px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
              <Image
                src="/reparacaonaval.jpg"
                alt="Navio em doca durante reparação"
                fill
                sizes="(min-width: 1024px) 310px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-[3/1.4] overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
              <Image
                src="/engenharianaval.jpg"
                alt="Engenharia e arquitetura naval"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
