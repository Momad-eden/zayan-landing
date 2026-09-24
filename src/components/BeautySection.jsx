"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const businesses = [
  {
    number: "01",
    image: "/assets/beauty/cosmetics1.jpg",
    title: "Boutiques de cosmétiques",
    text: "Présentez vos soins, produits capillaires et essentiels beauté dans une boutique en ligne professionnelle.",
  },
  {
    number: "02",
    image: "/assets/beauty/perfume.jpg",
    title: "Parfumeries",
    text: "Mettez vos parfums, coffrets et références en valeur et permettez à vos clients de commander facilement.",
  },
  {
    number: "03",
    image: "/assets/beauty/beauty-shop.jpg",
    title: "Entrepreneurs beauté",
    text: "Transformez votre activité en véritable marque digitale et développez votre présence en ligne.",
  },
];

export default function BeautySection() {
  return (
    <section
      id="pourquoi"
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* Halo supérieur */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.07] blur-[150px]" />

      {/* Transition organique supérieure */}
      <SectionDivider position="top" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-36">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/25 bg-[#CC0864]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5b9e]">
              <Sparkles size={13} />
              Pensé pour la beauté
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Votre univers beauté.
              <span className="block text-[#ff4b96]">Votre boutique.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-base leading-7 text-white/50 sm:text-lg">
              Que vous débutiez ou que votre activité soit déjà établie, Zayan
              vous donne les outils pour vendre en ligne, gérer votre business
              et le faire grandir.
            </p>
          </div>
        </motion.div>

        {/* LIGNE D'INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 h-px bg-gradient-to-r from-[#CC0864]/50 via-white/10 to-transparent"
        />

        {/* BUSINESS CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {businesses.map((business, index) => (
            <BusinessCard
              key={business.title}
              business={business}
              index={index}
            />
          ))}
        </div>

        {/* MESSAGE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-white/40">
              Une plateforme pensée pour votre quotidien.
            </p>

            <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              De votre première vente à votre prochaine étape.
            </p>
          </div>

          <a
            href="#offres"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#CC0864]/40 hover:bg-[#CC0864]/10"
          >
            Découvrir les offres
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>

      {/* Transition organique inférieure */}
      <SectionDivider position="bottom" />
    </section>
  );
}

function BusinessCard({ business, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Halo extérieur */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[#CC0864]/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111011]">
        {/* IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={business.image}
            alt={business.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
          />

          {/* Voile sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Teinte rose au survol */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#CC0864]/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

          {/* =========================================
              POUDRE COSMÉTIQUE — FOND DU TEXTE
          ========================================== */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
            {/* Nuage principal */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.72, 0.85, 0.72],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-20
                left-1/2
                h-72
                w-[125%]
                -translate-x-1/2
                rounded-[50%]
                bg-[radial-gradient(ellipse_at_center_bottom,rgba(204,8,100,0.65)_0%,rgba(204,8,100,0.38)_28%,rgba(204,8,100,0.16)_48%,transparent_72%)]
                blur-[18px]
              "
            />

            {/* Poudre gauche */}
            <motion.div
              animate={{
                x: [0, -8, 0],
                y: [0, -5, 0],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-8
                left-[8%]
                h-40
                w-40
                rounded-full
                bg-[#ff4b96]/25
                blur-[35px]
              "
            />

            {/* Poudre droite */}
            <motion.div
              animate={{
                x: [0, 8, 0],
                y: [0, -7, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="
                absolute
                -bottom-10
                right-[5%]
                h-44
                w-44
                rounded-full
                bg-[#CC0864]/25
                blur-[38px]
              "
            />

            {/* Petites particules de poudre */}
            <PowderParticle
              className="left-[18%] bottom-[28%]"
              delay={0}
              size="h-2 w-2"
            />
            <PowderParticle
              className="left-[30%] bottom-[40%]"
              delay={0.8}
              size="h-1.5 w-1.5"
            />
            <PowderParticle
              className="left-[42%] bottom-[25%]"
              delay={1.3}
              size="h-1 w-1"
            />
            <PowderParticle
              className="right-[35%] bottom-[34%]"
              delay={0.5}
              size="h-2 w-2"
            />
            <PowderParticle
              className="right-[23%] bottom-[22%]"
              delay={1.6}
              size="h-1.5 w-1.5"
            />
            <PowderParticle
              className="right-[12%] bottom-[38%]"
              delay={2}
              size="h-1 w-1"
            />
            <PowderParticle
              className="left-[55%] bottom-[46%]"
              delay={2.4}
              size="h-1 w-1"
            />
          </div>

          {/* =========================================
              CONTENU
          ========================================== */}

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
            <div className="mb-4 h-px w-10 bg-[#ff4b96] transition-all duration-500 group-hover:w-16" />

            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.7rem]">
              {business.title}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
              {business.text}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/45 transition duration-300 group-hover:text-[#ff7bb2]">
              <span>Découvrir avec Zayan</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </div>

        {/* Ligne d'accent */}
        <div className="h-[2px] w-0 bg-[#CC0864] transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.article>
  );
}

function PowderParticle({ className, delay, size }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 8,
        scale: 0.4,
      }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [8, -22, -42],
        scale: [0.4, 1, 0.7],
      }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className={`absolute rounded-full bg-[#ff4b96]/70 blur-[1px] ${size} ${className}`}
    />
  );
}

function SectionDivider({ position }) {
  const isTop = position === "top";

  return (
    <div
      className={`pointer-events-none relative z-10 w-full overflow-hidden ${
        isTop ? "h-24" : "h-28"
      }`}
    >
      {isTop ? (
        <>
          <div className="absolute left-1/2 top-4 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#CC0864]/10 blur-[70px]" />

          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 0H1440V55C1290 115 1190 140 1030 100C850 55 790 35 620 82C445 130 310 130 165 75C95 48 45 38 0 42V0Z"
              fill="#080808"
            />

            <path
              d="M0 48C140 40 190 115 350 125C500 135 555 65 720 60C900 55 960 135 1125 120C1260 108 1330 62 1440 75"
              fill="none"
              stroke="#CC0864"
              strokeOpacity="0.16"
              strokeWidth="2"
            />
          </svg>
        </>
      ) : (
        <>
          <div className="absolute bottom-0 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#CC0864]/10 blur-[70px]" />

          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 125C170 55 280 45 450 88C630 133 700 155 870 100C1035 48 1140 42 1280 75C1340 89 1390 105 1440 82V180H0V125Z"
              fill="#080808"
            />

            <path
              d="M0 125C170 55 280 45 450 88C630 133 700 155 870 100C1035 48 1140 42 1280 75C1340 89 1390 105 1440 82"
              fill="none"
              stroke="#CC0864"
              strokeOpacity="0.16"
              strokeWidth="2"
            />
          </svg>
        </>
      )}
    </div>
  );
}
