"use client";

import { motion } from "framer-motion";
import { IconAnchor, IconRig, IconWrench, IconChevronDown } from "./Icons";

const INDICATORS = [
  { icon: IconAnchor, label: "Construção Naval" },
  { icon: IconRig, label: "Engenharia Offshore" },
  { icon: IconWrench, label: "Reparação Especializada" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-navy-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-navy-deep/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 sm:pt-32 sm:pb-20 lg:px-12 lg:pb-28 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="kicker text-white/70"
        >
          Estaleiro Naval Internacional
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-5 max-w-4xl text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Construímos o Futuro da Engenharia Marítima.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
        >
          Soluções completas em construção naval, engenharia, reparação de
          embarcações, logística offshore e indústria metalomecânica para
          mercados nacionais e internacionais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Solicitar Proposta
          </a>
          <a
            href="#servicos"
            className="glass rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Explorar Serviços
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 sm:mt-14 sm:gap-x-10 sm:pt-7"
        >
          {INDICATORS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-white/85">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
