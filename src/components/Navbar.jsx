"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  LogIn,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  {
    label: "Fonctionnalités",
    href: "#fonctionnalites",
  },
  {
    label: "Comment ça marche",
    href: "#comment-ca-marche",
  },
  {
    label: "Offres",
    href: "#offres",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu avec Échap
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6 lg:pt-4">
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-black/[0.06] bg-white/95 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:h-[72px] sm:px-5 lg:px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Zayan - Accueil"
          >
            <Image
              src="/assets/logo/zayan-logo.png"
              alt="Zayan"
              width={150}
              height={50}
              priority
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-xl px-4 py-2.5 text-[13px] font-medium text-black/65 transition-all duration-300 hover:bg-black/[0.04] hover:text-black"
              >
                {link.label}

                <span className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 bg-[#CC0864] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            {/* Marketplace */}
            <a
              href="https://zayan-sn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-1 flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-black transition-all duration-300 hover:bg-[#CC0864]/[0.07]"
            >
              Marketplace
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Actions desktop */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Se connecter */}
            <a
              href="https://zayan-sn.com/login"
              className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-black/70 transition-all duration-300 hover:bg-black/[0.04] hover:text-black"
            >
              <LogIn
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
              Se connecter
            </a>

            {/* CTA principal */}
            <a
              href="https://zayan-sn.com/devenir-vendeur"
              className="group flex items-center gap-2 rounded-xl bg-[#CC0864] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(204,8,100,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b90759] hover:shadow-[0_12px_30px_rgba(204,8,100,0.30)]"
            >
              Créer ma boutique

              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-black/[0.04] text-black transition-colors hover:bg-black/[0.08] lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={21} strokeWidth={1.8} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={21} strokeWidth={1.8} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-x-3 top-[88px] z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:hidden"
            >
              <div className="p-2">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  Navigation
                </p>

                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        {link.label}

                        <ChevronRight
                          size={17}
                          className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#CC0864]"
                        />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Marketplace */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: navLinks.length * 0.05,
                      duration: 0.25,
                    }}
                  >
                    <a
                      href="https://zayan-sn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex items-center gap-2">
                        Marketplace
                        <ArrowUpRight
                          size={15}
                          className="text-[#CC0864]"
                        />
                      </span>

                      <ChevronRight
                        size={17}
                        className="text-white/25 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Séparateur */}
              <div className="mx-3 h-px bg-white/[0.08]" />

              {/* Actions */}
              <div className="space-y-2 p-3">
                {/* Se connecter */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.25,
                  }}
                  href="https://zayan-sn.com/login"
                  onClick={closeMenu}
                  className="flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  <LogIn size={17} strokeWidth={1.8} />
                  Se connecter
                </motion.a>

                {/* Créer ma boutique */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.25,
                  }}
                  href="https://zayan-sn.com/devenir-vendeur"
                  onClick={closeMenu}
                  className="group flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#CC0864] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(204,8,100,0.25)] transition-all duration-300 hover:bg-[#b90759]"
                >
                  Créer ma boutique

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>

              {/* Petit rappel de marque */}
              <div className="px-5 pb-5 pt-2 text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                  Zayan — Grow African Beauty Business
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}