"use client";

import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="zayan-gradient relative overflow-hidden pt-36 text-white">
      {/* Grille */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="zayan-grid h-full w-full" />
      </div>

      {/* Halo rose */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#CC0864]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur"
          >
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#CC0864]"
            />

            La plateforme des professionnels de la beauté
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl"
          >
            Faites grandir votre
            <span className="block text-[#ff4b96]">
              business beauté.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
          >
            Que vous débutiez ou que votre activité soit déjà établie,
            Zayan vous accompagne pour vendre en ligne, gérer votre activité
            et développer votre business, simplement.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href="https://zayan-sn.com/devenir-vendeur"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 rounded-full bg-[#CC0864] px-7 py-4 font-semibold text-white shadow-lg shadow-[#CC0864]/20 transition hover:bg-[#e20b70]"
            >
              Créer ma boutique

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#fonctionnalites"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Play size={16} fill="currentColor" />
              Découvrir Zayan
            </motion.a>
          </motion.div>

          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/55"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-[#ff4b96]"
              />
              Pensé pour la beauté
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-[#ff4b96]"
              />
              Sans compétence technique
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-[#ff4b96]"
              />
              Gestion depuis un seul espace
            </span>
          </motion.div>
        </div>

        {/* Dashboard */}
        <motion.div
          initial={{
            opacity: 0,
            y: 90,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          {/* Halo */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [0.98, 1.03, 0.98],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-10 rounded-[3rem] bg-[#CC0864]/25 blur-3xl"
          />

          {/* Dashboard flottant */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur"
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src="/assets/dashboard/dashboard-home.png"
                alt="Tableau de bord Zayan"
                width={1920}
                height={1080}
                priority
                className="block h-auto w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}