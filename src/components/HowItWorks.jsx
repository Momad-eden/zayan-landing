"use client";

import {
  ArrowRight,
  Check,
  Sparkles,
  CreditCard,
  LayoutDashboard,
  Package,
  Store,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    label: "Inscription",
    title: "Inscrivez-vous avec Google",
    text: "Créez votre compte Zayan rapidement avec votre compte Google et commencez votre parcours.",
    icon: Sparkles,
  },
  {
    number: "02",
    label: "Votre offre",
    title: "Choisissez votre offre",
    text: "Sélectionnez la formule qui correspond à votre activité et aux besoins de votre business.",
    icon: Store,
  },
  {
    number: "03",
    label: "Configuration",
    title: "Configurez votre boutique",
    text: "Ajoutez votre identité, vos visuels et configurez vos informations de paiement.",
    icon: CreditCard,
  },
  {
    number: "04",
    label: "Votre espace",
    title: "Accédez à votre dashboard",
    text: "Depuis votre espace Zayan, ajoutez vos produits, gérez votre activité et commencez à vendre.",
    icon: LayoutDashboard,
  },
];

/* =========================================================
   Séparation organique
========================================================= */

function SectionDivider({ position = "top" }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 z-10 w-full overflow-hidden ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[70px] w-full lg:h-[100px] ${
          position === "bottom" ? "rotate-180" : ""
        }`}
      >
        <defs>
          <linearGradient id={`how-divider-${position}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#080808" />
            <stop offset="50%" stopColor="#160b12" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
        </defs>

        <path
          d="M0,35 C180,95 300,95 470,48 C650,0 790,0 960,45 C1130,90 1260,95 1440,35 L1440,120 L0,120 Z"
          fill={`url(#how-divider-${position})`}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   Séparation centrale
========================================================= */

function JourneySeparator() {
  return (
    <div className="relative my-16 flex items-center justify-center lg:my-24">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cc0864]/30 to-transparent" />

      <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-[#0d0d0d] px-5 py-3 shadow-[0_0_40px_rgba(204,8,100,0.08)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cc0864]/50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#cc0864]" />
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          Un parcours pensé pour vous
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   Carte étape
========================================================= */

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Connexion entre les étapes */}
      {index < steps.length - 1 && (
        <div className="absolute left-[calc(100%+0.75rem)] top-[48px] hidden w-[calc(100%-1.5rem)] lg:block">
          <div className="relative h-px overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: 0.5 + index * 0.15,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#cc0864] to-transparent"
            />
          </div>

          <ArrowRight
            size={13}
            className="absolute -right-1.5 -top-1.5 text-[#cc0864]/60"
          />
        </div>
      )}

      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#cc0864]/25 group-hover:bg-white/[0.04] lg:p-7">
        {/* Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#cc0864]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Numéro + icône */}
        <div className="relative mb-8 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <Icon
              size={19}
              strokeWidth={1.7}
              className="text-[#cc0864]"
            />
          </div>

          <span className="text-4xl font-semibold tracking-[-0.06em] text-white/[0.08]">
            {step.number}
          </span>
        </div>

        {/* Label */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#cc0864]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cc0864]">
            {step.label}
          </span>
        </div>

        {/* Titre */}
        <h3 className="max-w-[250px] text-xl font-semibold tracking-[-0.03em] text-white lg:text-[22px]">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-white/45">
          {step.text}
        </p>

        {/* Indicateur */}
        <div className="mt-7 flex items-center gap-2">
          <div className="h-px w-8 bg-[#cc0864]/60 transition-all duration-500 group-hover:w-14" />

          <span className="text-[10px] uppercase tracking-[0.16em] text-white/25">
            Étape {step.number}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   Section principale
========================================================= */

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="relative overflow-hidden bg-[#080808] py-24 text-white lg:py-32"
    >
      <SectionDivider position="top" />

      {/* Lumière d'ambiance */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#cc0864]/[0.035] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            Header
        ================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cc0864]/20 bg-[#cc0864]/[0.06] px-4 py-2"
          >
            <Sparkles size={13} className="text-[#cc0864]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#cc0864]">
              Comment ça marche
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
          >
            Commencez simplement.
            <br />
            <span className="text-white/45">
              Grandissez avec Zayan.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
          >
            De votre inscription à votre première vente, quelques étapes
            suffisent pour mettre votre activité en ligne et commencer à
            développer votre business.
          </motion.p>
        </div>

        {/* =================================================
            Intro
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] border border-white/[0.07] bg-gradient-to-br from-white/[0.05] via-white/[0.025] to-transparent p-6 sm:p-8 lg:mt-20 lg:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#cc0864]/10 blur-[90px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cc0864]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#cc0864]">
                  Votre parcours
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                De l'inscription à vos premières ventes.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Zayan vous accompagne pour passer rapidement de votre compte
                à une boutique prête à vendre.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/20 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#cc0864]/10">
                <Check size={18} className="text-[#cc0864]" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Simple à mettre en place
                </p>

                <p className="mt-0.5 text-xs text-white/35">
                  Commencez à votre rythme
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            Étapes
        ================================================= */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            Séparation
        ================================================= */}
        <JourneySeparator />

        {/* =================================================
            Résultat final
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#cc0864]/20 bg-[#cc0864]/10">
            <Package
              size={22}
              strokeWidth={1.6}
              className="text-[#cc0864]"
            />
          </div>

          <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            Votre boutique est prête.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Ajoutez vos produits, partagez votre boutique avec vos clients
            et utilisez les outils Zayan pour gérer et développer votre
            activité.
          </p>

          <motion.a
            href="https://zayan-sn.com/devenir-vendeur"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#cc0864] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(204,8,100,0.2)] transition-shadow hover:shadow-[0_16px_50px_rgba(204,8,100,0.3)]"
          >
            Commencer avec Zayan

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>

      <SectionDivider position="bottom" />
    </section>
  );
}