"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  ShoppingBag,
  Store,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    text: "Une boutique dédiée à votre activité",
  },
  {
    icon: ShoppingBag,
    text: "Vos produits présentés à vos clients",
  },
  {
    icon: Globe2,
    text: "Une présence dans l’écosystème beauté Zayan",
  },
];

export default function OrdersSection() {
  return (
    <section
      id="ecosysteme"
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute right-[-15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#CC0864]/10 blur-[140px]" />

      <SectionDivider position="top" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          {/* =========================================
              MARKETPLACE
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              scale: 0.97,
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
            {/* Halo derrière l'image */}
            <motion.div
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-16 rounded-full bg-[#CC0864]/15 blur-[90px]"
            />

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111011] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
                {/* Barre supérieure */}
                <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <div className="hidden h-6 w-56 items-center justify-center rounded-full border border-white/5 bg-white/[0.025] sm:flex">
                    <span className="text-[8px] text-white/20">
                      zayan-sn.com
                    </span>
                  </div>

                  <div className="h-6 w-6 rounded-full bg-[#CC0864]/20" />
                </div>

                {/* Marketplace */}
                <div className="relative overflow-hidden rounded-[1.3rem]">
                  <Image
                    src="/assets/marketplace/marketplace-home.png"
                    alt="Marketplace beauté Zayan"
                    width={1920}
                    height={1080}
                    className="block h-auto w-full transition duration-700 hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
                className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#151015]/95 px-4 py-2.5 text-[10px] font-semibold text-white/70 shadow-2xl shadow-black/50 backdrop-blur-xl sm:left-8"
              >
                <span className="h-2 w-2 rounded-full bg-[#CC0864] shadow-lg shadow-[#CC0864]/50" />
                Écosystème beauté Zayan
              </motion.div>

              {/* Badge produits */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 -top-4 hidden rounded-2xl border border-[#CC0864]/20 bg-[#151015]/95 p-3 shadow-xl backdrop-blur-xl sm:block"
              >
                <ShoppingBag
                  size={20}
                  className="text-[#ff4b96]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================================
              CONTENU
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/25 bg-[#CC0864]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5b9e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CC0864]" />
              Votre visibilité
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Votre boutique.
              <span className="block text-[#ff4b96]">
                Votre place dans l’écosystème.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/50 sm:text-lg">
              Avec Zayan, votre activité dispose de son propre espace de
              vente tout en pouvant profiter de la visibilité de notre
              écosystème dédié à la beauté.
            </p>

            {/* Bénéfices */}
            <div className="mt-9 space-y-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.text}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.08,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#CC0864]/20 hover:bg-[#CC0864]/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CC0864]/10 text-[#ff4b96]">
                      <Icon size={17} />
                    </div>

                    <span className="text-sm font-medium text-white/65 transition group-hover:text-white">
                      {benefit.text}
                    </span>

                    <CheckCircle2
                      size={16}
                      className="ml-auto shrink-0 text-[#CC0864]"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="https://zayan-sn.com/"
              whileHover={{ x: 4 }}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#CC0864] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#CC0864]/20 transition hover:bg-[#e20b70]"
            >
              Découvrir l’écosystème Zayan

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Phrase finale */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-24 max-w-3xl text-center lg:mt-32"
        >
          <p className="text-lg leading-8 text-white/40 sm:text-xl">
            Votre boutique reste la vôtre.
            <span className="text-white">
              {" "}
              Zayan vous donne simplement plus de possibilités pour la faire
              découvrir.
            </span>
          </p>
        </motion.div>
      </div>

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