"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Package,
  Truck,
  BarChart3,
  CreditCard,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const problems = [
  {
    icon: MessageCircle,
    title: "Les commandes arrivent de partout",
    text: "WhatsApp, Instagram, appels, messages privés… les commandes peuvent se retrouver éparpillées entre plusieurs canaux, avec le risque d'oublier une demande ou de perdre une information.",
  },
  {
    icon: Package,
    title: "Le stock devient difficile à maîtriser",
    text: "Quand les produits sont vendus à plusieurs endroits, il n'est pas toujours simple de savoir ce qui reste réellement disponible, ce qui est déjà réservé ou ce qui doit être réapprovisionné.",
  },
  {
    icon: Users,
    title: "Les clients sont difficiles à centraliser",
    text: "Informations clients, historique des commandes et échanges restent souvent dispersés. Avec le temps, il devient plus difficile de suivre correctement chaque client.",
  },
  {
    icon: CreditCard,
    title: "Les paiements demandent du suivi",
    text: "Entre les paiements à confirmer, les commandes en attente et les différentes méthodes utilisées par les clients, garder une vision claire de ce qui a réellement été payé peut prendre du temps.",
  },
  {
    icon: Truck,
    title: "Les livraisons prennent du temps",
    text: "Préparer les commandes, transmettre les informations, suivre les livreurs et vérifier les livraisons ajoute une charge supplémentaire au quotidien.",
  },
  {
    icon: BarChart3,
    title: "Les décisions se prennent parfois sans visibilité",
    text: "Sans données regroupées au même endroit, il devient plus difficile de savoir quels produits se vendent le mieux, quelles commandes évoluent et comment l'activité progresse.",
  },
];

export default function Problem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeProblem = problems[activeIndex];

  function goTo(index) {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function previous() {
    const index =
      activeIndex === 0 ? problems.length - 1 : activeIndex - 1;

    setDirection(-1);
    setActiveIndex(index);
  }

  function next() {
    const index =
      activeIndex === problems.length - 1 ? 0 : activeIndex + 1;

    setDirection(1);
    setActiveIndex(index);
  }

  return (
    <section
      id="pourquoi"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* =====================================================
          LUMIÈRE
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CC0864]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#ff4b96]"
          >
            Le quotidien des activités beauté
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Votre activité grandit.
            <span className="block text-white/45">
              Votre organisation doit pouvoir suivre.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            Que vous soyez indépendant, propriétaire d&apos;une boutique ou à
            la tête d&apos;une équipe, gérer une activité beauté ne se limite
            pas à vendre des produits. Commandes, clients, stock, paiements et
            livraisons doivent fonctionner ensemble.
          </motion.p>
        </div>

        {/* =====================================================
            DESKTOP — GRILLE
        ====================================================== */}

        <div className="mt-16 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <ProblemCard
                key={problem.title}
                problem={problem}
                index={index}
              />
            );
          })}
        </div>

        {/* =====================================================
            MOBILE — CAROUSEL
        ====================================================== */}

        <div className="mt-14 sm:hidden">
          {/* Compteur */}

          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                Les principaux défis
              </p>

              <p className="mt-1 text-sm text-white/40">
                Faites défiler pour découvrir les problèmes.
              </p>
            </div>

            <div className="text-sm font-medium text-white/30">
              <span className="text-white">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(problems.length).padStart(2, "0")}
            </div>
          </div>

          {/* Carousel */}

          <div className="relative overflow-hidden rounded-[2rem]">
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.article
                key={activeProblem.title}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 90,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -90,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm"
              >
                {/* Halo */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#CC0864]/10 blur-[60px]" />

                {/* Numéro */}

                <div className="absolute right-7 top-7 text-xs font-semibold tracking-[0.2em] text-white/15">
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>

                {/* Icône */}

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CC0864]/20 bg-[#CC0864]/10 text-[#ff4b96]"
                >
                  <activeProblem.icon size={23} strokeWidth={1.8} />
                </motion.div>

                {/* Contenu */}

                <h3 className="relative mt-8 max-w-[85%] text-2xl font-semibold leading-tight text-white">
                  {activeProblem.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-white/50">
                  {activeProblem.text}
                </p>

                {/* Ligne */}

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 55 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.45,
                  }}
                  className="mt-8 h-px bg-[#CC0864]"
                />

                {/* Petit indicateur */}

                <div className="absolute bottom-7 left-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CC0864]" />
                  Défi {String(activeIndex + 1).padStart(2, "0")}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* =================================================
              CONTROLES
          ================================================== */}

          <div className="mt-5 flex items-center justify-between">
            {/* précédent */}

            <button
              onClick={previous}
              aria-label="Problème précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={17} />
            </button>

            {/* indicateurs */}

            <div className="flex items-center gap-1.5">
              {problems.map((problem, index) => (
                <button
                  key={problem.title}
                  onClick={() => goTo(index)}
                  aria-label={`Afficher le problème ${index + 1}`}
                  className="p-1"
                >
                  <motion.span
                    animate={{
                      width: index === activeIndex ? 24 : 6,
                      opacity: index === activeIndex ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.25 }}
                    className="block h-1.5 rounded-full bg-[#CC0864]"
                  />
                </button>
              ))}
            </div>

            {/* suivant */}

            <button
              onClick={next}
              aria-label="Problème suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CC0864] text-white transition hover:bg-[#e20b70]"
            >
              <ArrowRight size={17} />
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] text-white/20">
            Utilisez les flèches pour découvrir les différents défis.
          </p>
        </div>

        {/* =====================================================
            CONCLUSION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#CC0864]/20 bg-[#CC0864]/5 px-5 py-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#CC0864]" />

            <p className="text-sm font-medium text-white/70">
              Le problème n&apos;est pas seulement de vendre.
              <span className="ml-1 text-white">
                C&apos;est de pouvoir gérer sa croissance.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   CARTE DESKTOP
================================================================ */

function ProblemCard({ problem, index }) {
  const Icon = problem.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#CC0864]/30 hover:bg-white/[0.07]"
    >
      {/* Halo au survol */}

      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#CC0864]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Numéro */}

      <div className="absolute right-6 top-6 text-xs font-semibold tracking-widest text-white/15">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icône */}

      <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CC0864]/20 bg-[#CC0864]/10 text-[#ff4b96] transition-transform duration-300 group-hover:scale-105">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <h3 className="relative max-w-[85%] text-lg font-semibold leading-6 text-white">
        {problem.title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-white/50">
        {problem.text}
      </p>

      {/* Ligne d'accent */}

      <div className="mt-6 h-px w-10 bg-[#CC0864]/50 transition-all duration-300 group-hover:w-16 group-hover:bg-[#ff4b96]" />
    </motion.article>
  );
}