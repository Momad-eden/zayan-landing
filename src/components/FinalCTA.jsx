"use client";

import { ArrowRight, Sparkles, Store, Check } from "lucide-react";
import { motion } from "motion/react";

/* =========================================================
   Séparation organique
========================================================= */

function SectionDivider() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-10 w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="block h-[75px] w-full lg:h-[105px]"
      >
        <defs>
          <linearGradient id="final-cta-divider" x1="0" x2="1">
            <stop offset="0%" stopColor="#080808" />
            <stop offset="50%" stopColor="#150910" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
        </defs>

        <path
          d="M0,38 C180,105 330,105 500,55 C675,5 790,5 965,50 C1140,95 1260,105 1440,35 L1440,130 L0,130 Z"
          fill="url(#final-cta-divider)"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   Particule décorative
========================================================= */

function Particle({ className = "", delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8, scale: 0.6 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: [8, -18, -35],
        scale: [0.6, 1, 0.7],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className={`absolute h-1.5 w-1.5 rounded-full bg-[#ff4b96]/60 ${className}`}
    />
  );
}

/* =========================================================
   CTA final
========================================================= */

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 pb-20 pt-28 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <SectionDivider />

      {/* =====================================================
          Ambiance globale
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CC0864]/[0.045] blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CC0864]/10"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.09] bg-gradient-to-br from-[#170b12] via-[#0d080b] to-[#080808] px-6 py-20 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:px-12 lg:rounded-[3.5rem] lg:py-28"
        >
          {/* =================================================
              Glows
          ================================================= */}

          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#CC0864]/20 blur-[110px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#CC0864]/10 blur-[110px]"
            aria-hidden="true"
          />

          {/* =================================================
              Particules
          ================================================= */}

          <Particle className="left-[18%] top-[30%]" delay={0} />
          <Particle className="left-[25%] top-[65%]" delay={1.2} />
          <Particle className="right-[20%] top-[28%]" delay={2} />
          <Particle className="right-[28%] top-[65%]" delay={0.8} />
          <Particle className="left-[12%] top-[48%] h-1 w-1" delay={2.8} />
          <Particle className="right-[13%] top-[48%] h-1 w-1" delay={1.7} />

          {/* =================================================
              Contenu
          ================================================= */}

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/25 bg-[#CC0864]/[0.08] px-4 py-2"
            >
              <Sparkles
                size={13}
                className="text-[#ff4b96]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Zayan Marchands
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl"
            >
              Faites grandir
              <br />
              <span className="bg-gradient-to-r from-white via-white to-[#ff4b96] bg-clip-text text-transparent">
                votre business beauté.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base lg:text-lg lg:leading-8"
            >
              Que vous débutiez ou que votre activité soit déjà établie,
              Zayan vous donne les outils pour vendre en ligne, gérer votre
              business et le faire grandir.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://zayan-sn.com/devenir-vendeur"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#CC0864] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(204,8,100,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e20b70] hover:shadow-[0_18px_50px_rgba(204,8,100,0.35)]"
              >
                Commencer avec Zayan

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* =================================================
                Mini réassurance
            ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs text-white/35">
                <Check size={14} className="text-[#CC0864]" />
                Inscription avec Google
              </div>

              <div className="hidden h-3 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2 text-xs text-white/35">
                <Check size={14} className="text-[#CC0864]" />
                Choisissez votre offre
              </div>

              <div className="hidden h-3 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2 text-xs text-white/35">
                <Check size={14} className="text-[#CC0864]" />
                Configurez votre boutique
              </div>
            </motion.div>
          </div>

          {/* =================================================
              Icône décorative
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="absolute -bottom-8 -right-8 hidden h-28 w-28 items-center justify-center rounded-[2rem] border border-white/[0.06] bg-white/[0.025] rotate-12 lg:flex"
          >
            <Store
              size={32}
              strokeWidth={1.2}
              className="text-[#CC0864]/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="absolute -left-8 -top-8 hidden h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/[0.06] bg-white/[0.025] -rotate-12 lg:flex"
          >
            <Sparkles
              size={27}
              strokeWidth={1.2}
              className="text-[#CC0864]/30"
            />
          </motion.div>
        </motion.div>

        {/* =================================================
            Slogan final
        ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/20">
            Zayan — Grow African Beauty Business
          </p>
        </motion.div>
      </div>
    </section>
  );
}