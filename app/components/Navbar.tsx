"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconClose, IconMenu } from "./Icons";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#offshore", label: "Offshore" },
  { href: "#engenharia", label: "Engenharia" },
  { href: "#formacao", label: "Formação" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-white/95 shadow-[0_1px_0_rgba(7,43,69,0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-deep/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-extrabold tracking-tight transition-colors ${
              scrolled || open ? "text-navy" : "text-white"
            }`}
          >
            SUPREMO SHIPYARD
          </span>
          <span
            className={`kicker mt-1 transition-colors ${
              scrolled || open ? "text-steel" : "text-white/70"
            }`}
          >
            Marine Engineering
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-ink hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Solicitar Proposta
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy/10 py-4 text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-5 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Solicitar Proposta
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
