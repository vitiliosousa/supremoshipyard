"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SPECIALIZATIONS } from "./specializations-data";
import Reveal from "./Reveal";

export default function SpecializationsGrid() {
  return (
    <section id="servicos" className="bg-fog py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="kicker text-accent">Áreas de Especialização</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Um estaleiro, oito disciplinas de engenharia marítima.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZATIONS.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={spec.code} delay={(i % 4) * 0.08}>
                <motion.article
                  whileHover="hover"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy shadow-lg shadow-navy/10"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <motion.div
                      variants={{ hover: { scale: 1.08 } }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={spec.image}
                        alt={spec.title}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/10" />

                    <div className="glass absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="kicker absolute right-4 top-4 text-white/60">
                      {spec.code}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-xl font-bold leading-tight text-white">
                        {spec.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
