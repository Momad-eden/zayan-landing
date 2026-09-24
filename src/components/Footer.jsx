"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Pourquoi Zayan", href: "#pourquoi" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Offres", href: "#offres" },
    { label: "FAQ", href: "#faq" },
  ],
};

/* =========================================================
   Icônes sociales
========================================================= */

function InstagramIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4.5c-.5-.1-2-.2-3.6-.2-3.5 0-5.9 2.1-5.9 6v3.3H4v4h3.5V24h4.3v-6.4h3.5l.6-4h-4.1v-2.9c0-1.2.3-2.7 2.2-2.7Z" />
    </svg>
  );
}

/* =========================================================
   Footer
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          Glow supérieur
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.035] blur-[120px]"
        aria-hidden="true"
      />

      {/* =====================================================
          Séparation organique
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="block h-[65px] w-full lg:h-[90px]"
        >
          <defs>
            <linearGradient id="footer-divider" x1="0" x2="1">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="50%" stopColor="#160910" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>

          <path
            d="M0,30 C180,88 320,92 490,48 C660,5 790,4 960,45 C1130,86 1260,90 1440,30 L1440,110 L0,110 Z"
            fill="url(#footer-divider)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        {/* =================================================
            Main footer
        ================================================= */}

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* =================================================
              Brand
          ================================================= */}

          <div className="lg:col-span-5">
            <a
              href="#"
              className="inline-flex"
              aria-label="Zayan - Accueil"
            >
              <Image
                src="/assets/logo/zayan-logo.png"
                alt="Zayan"
                width={1600}
                height={1000}
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              La plateforme digitale pensée pour aider les professionnels de
              la beauté à vendre en ligne, gérer leur activité et faire
              grandir leur business.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/20">
              Grow African Beauty Business
            </p>

            {/* =================================================
                Réseaux sociaux
            ================================================= */}

            <div className="mt-8 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#CC0864]/30 hover:bg-[#CC0864] hover:text-white"
              >
                <InstagramIcon />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#CC0864]/30 hover:bg-[#CC0864] hover:text-white"
              >
                <FacebookIcon />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/221781695704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#CC0864]/30 hover:bg-[#CC0864] hover:text-white"
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>

          {/* =================================================
              Navigation
          ================================================= */}

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              Contact
          ================================================= */}

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:contact@zayan-sn.com"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/30 transition-colors group-hover:border-[#CC0864]/20 group-hover:text-[#CC0864]">
                  <Mail size={14} />
                </span>

                <span className="pt-1 text-sm text-white/50 transition-colors group-hover:text-white">
                  contact@zayan-sn.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/221781695704"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/30 transition-colors group-hover:border-[#CC0864]/20 group-hover:text-[#CC0864]">
                  <MessageCircle size={14} />
                </span>

                <span className="pt-1 text-sm text-white/50 transition-colors group-hover:text-white">
                  +221 78 169 57 04
                </span>
              </a>

              {/* Localisation */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/30">
                  <MapPin size={14} />
                </span>

                <span className="pt-1 text-sm text-white/50">
                  Dakar, Sénégal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            CTA vendeur
        ================================================= */}

        <div className="mt-16 overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-r from-[#CC0864]/[0.08] via-white/[0.025] to-transparent p-6 sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Prêt à développer votre activité ?
              </p>

              <p className="mt-1 text-xs leading-6 text-white/35">
                Rejoignez Zayan et commencez à construire votre présence en
                ligne.
              </p>
            </div>

            <a
              href="https://zayan-sn.com/devenir-vendeur"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#CC0864] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e20b70] hover:shadow-[0_12px_35px_rgba(204,8,100,0.25)]"
            >
              Commencer avec Zayan

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* =================================================
            Bottom bar
        ================================================= */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.07] pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/25">
            © {new Date().getFullYear()} Zayan. Tous droits réservés.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="#"
              className="text-white/30 transition-colors hover:text-white"
            >
              Politique de confidentialité
            </a>

            <a
              href="#"
              className="text-white/30 transition-colors hover:text-white"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}