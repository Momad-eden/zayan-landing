"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";

const points = [
  {
    label: "Suivez vos ventes",
    icon: Activity,
  },
  {
    label: "Gérez vos produits",
    icon: Package,
  },
  {
    label: "Traitez vos commandes",
    icon: ShoppingBag,
  },
  {
    label: "Consultez vos clients",
    icon: Users,
  },
  {
    label: "Suivez votre stock",
    icon: Package,
  },
  {
    label: "Analysez votre activité",
    icon: CircleDollarSign,
  },
];

export default function DashboardShowcase() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* Halo principal */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.06] blur-[150px]" />

      {/* Transition supérieure */}
      <SectionDivider position="top" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
          {/* =========================================
              CONTENU
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/25 bg-[#CC0864]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5b9e]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CC0864]" />
              Votre espace de gestion
            </div>

            {/* Titre */}
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Votre activité.
              <span className="block text-[#ff4b96]">
                Une seule vue.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-white/50 sm:text-lg">
              Retrouvez les informations essentielles de votre activité dans
              un tableau de bord clair, pensé pour vous aider à comprendre ce
              qui se passe et à prendre les bonnes décisions.
            </p>

            {/* Points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + index * 0.06,
                    }}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#ff4b96] transition duration-300 group-hover:border-[#CC0864]/30 group-hover:bg-[#CC0864]/10">
                      <Icon size={15} />
                    </span>

                    <span className="text-sm font-medium text-white/65 transition group-hover:text-white">
                      {point.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA secondaire */}
            <motion.a
              href="#offres"
              whileHover={{ x: 4 }}
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              Découvrir les fonctionnalités
              <ArrowUpRight
                size={16}
                className="text-[#ff4b96] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* =========================================
              DASHBOARD
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Halo */}
            <motion.div
              animate={{
                opacity: [0.35, 0.55, 0.35],
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-16 rounded-full bg-[#CC0864]/15 blur-[90px]"
            />

            {/* Dashboard flottant */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111011] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
                {/* Barre navigateur */}
                <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <div className="hidden h-6 w-56 items-center justify-center rounded-full border border-white/5 bg-white/[0.025] sm:flex">
                    <span className="text-[8px] text-white/20">
                      app.zayan-sn.com
                    </span>
                  </div>

                  <div className="h-6 w-6 rounded-full bg-[#CC0864]/20" />
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden rounded-[1.3rem]">
                  <Image
                    src="/assets/dashboard/dashboard-sales1.png"
                    alt="Tableau de bord des ventes Zayan"
                    width={1920}
                    height={1080}
                    priority={false}
                    className="block h-auto w-full"
                  />

                  {/* Léger voile */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.02]" />
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#151015]/95 px-4 py-2.5 text-[10px] font-semibold text-white/70 shadow-2xl shadow-black/50 backdrop-blur-xl sm:left-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                Données en temps réel
              </motion.div>

              {/* Petit accent flottant */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 -top-4 hidden h-16 w-16 rounded-2xl border border-[#CC0864]/20 bg-[#CC0864]/10 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex h-full items-center justify-center">
                  <Activity
                    size={21}
                    className="text-[#ff4b96]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Phrase de conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-24 max-w-3xl text-center lg:mt-32"
        >
          <p className="text-lg leading-8 text-white/45 sm:text-xl">
            Une vision claire de votre activité pour{" "}
            <span className="font-semibold text-white">
              mieux comprendre, mieux gérer et mieux grandir.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Transition inférieure */}
      <SectionDivider position="bottom" />
    </section>
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