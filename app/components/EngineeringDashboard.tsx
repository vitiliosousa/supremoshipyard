import Image from "next/image";
import Reveal from "./Reveal";
import { IconBlueprint, IconShieldCheck } from "./Icons";

const MODULES = [
  "Blueprint técnico",
  "Modelagem 3D",
  "Cálculo de estabilidade",
  "Estrutura longitudinal",
  "Verificação de classe",
  "Fiscalização de projeto",
];

export default function EngineeringDashboard() {
  return (
    <section id="engenharia" className="relative overflow-hidden bg-navy-deep py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/engenharianaval.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />
      </div>
      <div className="blueprint-grid absolute inset-0" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-accent">Engenharia &amp; Arquitetura Naval</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Cada embarcação nasce de um modelo, não de uma estimativa.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Blueprint, modelo 3D e cálculo estrutural acompanham o projeto do
            primeiro traço à aprovação de classe.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark mt-10 grid gap-px overflow-hidden rounded-3xl sm:mt-14 lg:grid-cols-[1.1fr_1fr]">
            <div className="bg-navy-deep/60 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2.5 text-white/70">
                <IconBlueprint className="h-5 w-5" />
                <span className="kicker">Blueprint — Casco Principal</span>
              </div>

              <svg
                viewBox="0 0 560 220"
                className="mt-6 w-full"
                fill="none"
                role="img"
                aria-label="Desenho técnico do casco em corte lateral"
              >
                <g stroke="#F97316" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" opacity="0.9">
                  <path d="M40 170 L64 102 L440 102 L500 148 L500 170 Z" />
                  <path d="M70 116 L436 116" strokeWidth="1" opacity="0.5" />
                  <rect x="380" y="58" width="66" height="44" />
                  <path d="M413 58 L413 30" />
                  <path d="M398 36 L428 36" />
                </g>
                <path
                  d="M12 174 L548 174"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeDasharray="2 7"
                  opacity="0.35"
                />
                <text
                  x="270"
                  y="204"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  letterSpacing="0.08em"
                  fill="rgba(255,255,255,0.55)"
                >
                  CORTE LONGITUDINAL — CASCO EM AÇO NAVAL
                </text>
              </svg>
            </div>

            <div className="bg-navy-deep/80 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-2.5 text-white/70">
                <IconShieldCheck className="h-5 w-5" />
                <span className="kicker">Módulos de Engenharia</span>
              </div>

              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {MODULES.map((module) => (
                  <li
                    key={module}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-white/85">
                      {module}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
