import { IconFacebook, IconInstagram, IconLinkedin, IconMail, IconPhone, IconPin } from "./Icons";

const SERVICE_LINKS = [
  { href: "#servicos", label: "Construção Naval" },
  { href: "#engenharia", label: "Engenharia Naval" },
  { href: "#servicos", label: "Reparação Naval" },
  { href: "#offshore", label: "Offshore Oil & Gas" },
  { href: "#formacao", label: "Formação Profissional" },
];

const SOCIALS = [
  { icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { icon: IconInstagram, label: "Instagram", href: "#" },
  { icon: IconFacebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight text-white">
              SUPREMO SHIPYARD
            </p>
            <p className="kicker mt-1.5 text-white/50">Marine Engineering</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Engineering the Future of Maritime Excellence.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="kicker text-white/40">Serviços</p>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker text-white/40">Navegação</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="#home" className="text-sm text-white/70 transition-colors hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-white/70 transition-colors hover:text-accent">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-white/70 transition-colors hover:text-accent">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-white/70 transition-colors hover:text-accent">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker text-white/40">Contacto</p>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                <span className="text-sm text-white/70">Maputo, Moçambique</span>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                <a
                  href="mailto:geral@supremoshipyard.co.mz"
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  geral@supremoshipyard.co.mz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                <span className="text-sm text-white/70">+258 XX XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © 2026 Supremo Shipyard Marine Engineering. Todos os direitos
            reservados.
          </p>
          <p className="kicker text-white/30">
            Estaleiro Naval · Engenharia · Offshore — Moçambique
          </p>
        </div>
      </div>
    </footer>
  );
}
