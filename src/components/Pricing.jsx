"use client";

import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Jànq-bi",
    description: "Pour commencer simplement.",
    price: "9 900",
    period: "FCFA • une seule fois",
    commission: "+ 6 % par vente enregistrée",
    badge: "Sans abonnement",
    featured: false,

    highlight: "Pour lancer votre boutique",

    included: [
      "60 produits",
      "Boutique en ligne",
      "Paiement Wave",
      "Support WhatsApp",
    ],

    features: [
      "60 produits",
      "Boutique en ligne",
      "Paiement Wave",
      "Support WhatsApp",
    ],

    cta: "Commencer avec Jànq-bi",
  },

  {
    name: "Lingeer",
    description: "Pour développer votre boutique.",
    price: "7 500",
    period: "FCFA / mois",
    trial: "7 jours d'essai",
    featured: false,

    highlight: "Pour mieux gérer votre activité",

    included: [
      "Tout Jànq-bi",
      "25 produits",
      "Gestion des commandes",
      "Gestion des livraisons",
    ],

    features: [
      "Tout Jànq-bi",
      "25 produits",
      "Boutique personnalisée",
      "Gestion des commandes",
      "Suivi WhatsApp",
      "Paiement Wave",
      "Suivi des ventes",
      "Gestion des livraisons",
      "Support communauté",
    ],

    cta: "Choisir Lingeer",
  },

  {
    name: "Dalincor",
    description: "Pour les activités en croissance.",
    price: "12 500",
    period: "FCFA / mois",
    trial: "7 jours d'essai",
    featured: true,

    highlight: "Pour structurer votre entreprise",

    included: [
      "Tout Lingeer",
      "150 produits",
      "Caisse",
      "Gestion RH",
      "Rapports de stock",
    ],

    features: [
      "Tout Lingeer",
      "150 produits",
      "3 membres d'équipe",
      "Gestion des permissions",
      "Caisse",
      "Rapports de stock",
      "Gestion des livraisons",
      "Gestion RH",
    ],

    cta: "Choisir Dalincor",
  },

  {
    name: "Wurus",
    description: "Pour les entreprises structurées.",
    price: "17 500",
    period: "FCFA / mois",
    trial: "7 jours d'essai",
    featured: false,

    highlight: "Pour piloter toute votre activité",

    included: [
      "Tout Dalincor",
      "Produits illimités",
      "10 membres d'équipe",
      "Statistiques avancées",
      "Gestion des dépenses",
    ],

    features: [
      "Tout Dalincor",
      "Produits illimités",
      "10 membres d'équipe",
      "URL personnalisée",
      "Promotion sur l'accueil",
      "Statistiques avancées",
      "Export des données",
      "Gestion des dépenses",
      "Gestion des livraisons",
    ],

    cta: "Choisir Wurus",
  },
];

/* =========================================================
   ORGANIC SECTION DIVIDER
========================================================= */

function SectionDivider() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-28 overflow-hidden">
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient
            id="pricingDivider"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#080808" />
            <stop offset="45%" stopColor="#120b10" />
            <stop offset="70%" stopColor="#080808" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
        </defs>

        <path
          d="
            M0 0
            H1440
            V42
            C1290 72 1170 105 1010 84
            C850 63 760 22 600 48
            C430 76 285 112 0 60
            Z
          "
          fill="url(#pricingDivider)"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   PREMIUM SEPARATOR
========================================================= */

function EvolutionSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative my-16 sm:my-20"
    >
      {/* Large pink halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cc0864]/10 blur-[70px]" />

      {/* Main visual line */}
      <div className="relative flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Central capsule */}
        <div className="absolute flex items-center gap-3 rounded-full border border-white/[0.09] bg-[#080808] px-5 py-2.5 shadow-[0_0_40px_rgba(204,8,100,0.08)]">
          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#cc0864] shadow-[0_0_14px_#cc0864]"
          />

          <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
            Faites évoluer votre activité
          </span>

          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#cc0864] shadow-[0_0_14px_#cc0864]"
          />
        </div>
      </div>

      {/* Floating particles */}
      <motion.span
        animate={{
          opacity: [0.1, 0.8, 0.1],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[18%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#cc0864]"
      />

      <motion.span
        animate={{
          opacity: [0.1, 0.8, 0.1],
          y: [0, 4, 0],
        }}
        transition={{
          duration: 3,
          delay: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#cc0864]"
      />
    </motion.div>
  );
}

/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({ plan, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 sm:p-7 ${
        plan.featured
          ? "border-[#cc0864]/60 bg-[#120b10] shadow-[0_25px_80px_rgba(204,8,100,0.14)]"
          : "border-white/[0.08] bg-[#0d0d0d] hover:border-white/[0.16]"
      }`}
    >
      {/* Card glow */}
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 ${
          plan.featured
            ? "bg-[#cc0864]/20 opacity-100"
            : "bg-[#cc0864]/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Recommended badge */}
      {plan.featured && (
        <div className="absolute right-5 top-5">
          <div className="flex items-center gap-1.5 rounded-full border border-[#cc0864]/30 bg-[#cc0864]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#ff5ca6]">
            <Sparkles className="h-3.5 w-3.5" />
            Recommandé
          </div>
        </div>
      )}

      {/* Header */}
      <div className="relative">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          {plan.featured ? (
            <Sparkles className="h-5 w-5 text-[#ff4b96]" />
          ) : (
            <Zap className="h-5 w-5 text-white/70" />
          )}
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {plan.name}
        </h3>

        <p className="mt-2 max-w-[240px] text-sm leading-6 text-white/50">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="relative mt-7 border-y border-white/[0.08] py-6">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {plan.price}
          </span>

          <span className="pb-1 text-sm text-white/45">
            {plan.period}
          </span>
        </div>

        {plan.commission && (
          <p className="mt-3 text-sm font-medium text-[#ff5ca6]">
            {plan.commission}
          </p>
        )}

        {plan.trial && (
          <div className="mt-3 inline-flex items-center rounded-full bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/65">
            {plan.trial}
          </div>
        )}
      </div>

      {/* Value proposition */}
      <div className="relative mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
          {plan.highlight}
        </p>

        <div className="mt-4 space-y-3">
          {plan.included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cc0864]/15">
                <Check className="h-3 w-3 text-[#ff5ca6]" />
              </div>

              <span className="text-sm font-medium leading-5 text-white/85">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="relative mt-7 flex-1">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">
          Fonctionnalités
        </p>

        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#cc0864]" />

              <span
                className={`text-sm leading-5 ${
                  feature.startsWith("Tout ")
                    ? "font-medium text-[#ff5ca6]"
                    : "text-white/55"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-8">
        <a
          href="https://zayan-sn.com/devenir-vendeur"
          className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
            plan.featured
              ? "bg-[#cc0864] text-white hover:bg-[#e10a70]"
              : "border border-white/10 bg-white/[0.04] text-white hover:border-[#cc0864]/40 hover:bg-[#cc0864]/10"
          }`}
        >
          {plan.cta}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function Pricing() {
  return (
    <section
      id="offres"
      className="relative overflow-hidden bg-[#080808] py-28 text-white lg:py-36"
    >
      {/* Top organic transition */}
      <SectionDivider />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#cc0864]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cc0864]/20 bg-[#cc0864]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#ff5ca6]">
            <TrendingUp className="h-3.5 w-3.5" />
            Les offres Zayan
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Une offre qui évolue
            <span className="block text-white/45">
              avec votre activité.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Commencez avec les outils essentiels, puis faites évoluer
            votre espace Zayan à mesure que votre activité grandit.
          </p>
        </motion.div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            NEW VISUAL SEPARATOR
        ================================================= */}

        <EvolutionSeparator />

        {/* =================================================
            EVOLUTION BLOCK
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d]"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-[#cc0864]/[0.06] blur-[80px]" />

          <div className="relative grid divide-y divide-white/[0.08] md:grid-cols-4 md:divide-x md:divide-y-0">

            {/* Jànq-bi */}
            <div className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc0864]/30 bg-[#cc0864]/10 text-xs font-semibold text-[#ff5ca6]">
                  01
                </span>

                <span className="text-sm font-semibold text-white">
                  Jànq-bi
                </span>
              </div>

              <p className="text-sm leading-6 text-white/45">
                Commencer avec une boutique en ligne.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#cc0864] transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Lingeer */}
            <div className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc0864]/30 bg-[#cc0864]/10 text-xs font-semibold text-[#ff5ca6]">
                  02
                </span>

                <span className="text-sm font-semibold text-white">
                  Lingeer
                </span>
              </div>

              <p className="text-sm leading-6 text-white/45">
                Gérer les commandes et les livraisons.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#cc0864] transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Dalincor */}
            <div className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc0864]/30 bg-[#cc0864]/10 text-xs font-semibold text-[#ff5ca6]">
                  03
                </span>

                <span className="text-sm font-semibold text-white">
                  Dalincor
                </span>
              </div>

              <p className="text-sm leading-6 text-white/45">
                Structurer l'équipe et les opérations.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#cc0864] transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Wurus */}
            <div className="group relative p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cc0864]/30 bg-[#cc0864]/10 text-xs font-semibold text-[#ff5ca6]">
                  04
                </span>

                <span className="text-sm font-semibold text-white">
                  Wurus
                </span>
              </div>

              <p className="text-sm leading-6 text-white/45">
                Piloter une activité plus complète.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#cc0864] transition-all duration-500 group-hover:w-16" />
            </div>

          </div>
        </motion.div>

        {/* =================================================
            VALUE PROPOSITION
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          {/* Decorative symbol */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#cc0864]/50" />

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cc0864]/20 bg-[#cc0864]/10">
              <Sparkles className="h-3.5 w-3.5 text-[#ff5ca6]" />
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#cc0864]/50" />
          </div>

          <p className="text-sm leading-7 text-white/40 sm:text-base">
            Avec Zayan, vous ne choisissez pas seulement une offre.
            Vous choisissez un niveau d'outils adapté à l'étape actuelle
            de votre entreprise, avec la possibilité de faire évoluer
            votre espace lorsque vos besoins grandissent.
          </p>
        </motion.div>

      </div>

      {/* =================================================
          BOTTOM ORGANIC TRANSITION
      ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 overflow-hidden translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0 100
              V58
              C180 20 320 12 500 42
              C700 76 820 88 1010 48
              C1190 12 1320 20 1440 55
              V100
              Z
            "
            fill="#0b0b0b"
          />
        </svg>
      </div>
    </section>
  );
}