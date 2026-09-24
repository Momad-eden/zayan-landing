"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    number: "01",
    question: "Qu'est-ce que Zayan ?",
    answer:
      "Zayan est une plateforme conçue pour aider les professionnels de la beauté à vendre en ligne et à gérer leur activité depuis un même espace. Vous pouvez créer votre boutique, présenter vos produits, gérer vos commandes et utiliser différents outils selon votre offre.",
  },
  {
    number: "02",
    question: "À qui s'adresse Zayan ?",
    answer:
      "Zayan s'adresse notamment aux boutiques de cosmétiques, parfumeries, marques de beauté et entrepreneurs du secteur qui souhaitent développer leur présence en ligne et mieux gérer leur activité.",
  },
  {
    number: "03",
    question: "Dois-je savoir coder pour utiliser Zayan ?",
    answer:
      "Non. Aucun savoir-faire en développement web n'est nécessaire. Vous créez votre compte avec Google, choisissez votre offre, configurez votre boutique puis accédez à votre dashboard pour ajouter vos produits et commencer à vendre.",
  },
  {
    number: "04",
    question: "Comment fonctionne le paiement avec Wave ?",
    answer:
      "Vous pouvez configurer les informations de paiement de votre boutique afin que vos clients puissent payer selon les modalités proposées par votre compte Wave. Zayan facilite l'intégration de ce moyen de paiement dans votre parcours de vente.",
  },
  {
    number: "05",
    question: "Zayan gère-t-il les livraisons ?",
    answer:
      "La gestion des livraisons dépend de l'offre choisie. Les formules qui incluent cette fonctionnalité permettent de suivre et gérer les livraisons depuis votre espace Zayan.",
  },
  {
    number: "06",
    question: "Puis-je ajouter des membres à mon équipe ?",
    answer:
      "Oui. Certaines offres permettent d'ajouter plusieurs membres à votre équipe et de leur attribuer des permissions adaptées à leur rôle dans votre entreprise.",
  },
  {
    number: "07",
    question: "Puis-je changer d'offre ?",
    answer:
      "Oui, votre activité peut évoluer avec Zayan. Vous pouvez faire évoluer votre formule afin d'accéder à davantage de fonctionnalités, de capacité ou d'outils de gestion selon les besoins de votre entreprise.",
  },
  {
    number: "08",
    question: "Comment commencer avec Zayan ?",
    answer:
      "Le parcours est simple : inscrivez-vous avec votre compte Google, choisissez votre offre, configurez votre identité, vos visuels et vos informations de paiement, puis accédez à votre dashboard pour ajouter vos produits et commencer à vendre.",
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
          <linearGradient
            id={`faq-divider-${position}`}
            x1="0"
            x2="1"
          >
            <stop offset="0%" stopColor="#080808" />
            <stop offset="50%" stopColor="#130a10" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
        </defs>

        <path
          d="M0,35 C180,95 310,95 480,48 C650,0 790,0 960,45 C1130,90 1260,95 1440,35 L1440,120 L0,120 Z"
          fill={`url(#faq-divider-${position})`}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   Élément FAQ
========================================================= */

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden border-b border-white/[0.07] last:border-b-0 ${
        isOpen ? "bg-white/[0.025]" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="flex w-full items-center gap-4 px-5 py-6 text-left sm:px-7 sm:py-7"
      >
        {/* Numéro */}
        <span
          className={`hidden shrink-0 text-xs font-semibold tracking-[0.15em] transition-colors duration-300 sm:block ${
            isOpen ? "text-[#CC0864]" : "text-white/20"
          }`}
        >
          {faq.number}
        </span>

        {/* Question */}
        <span
          className={`flex-1 text-base font-semibold tracking-[-0.015em] transition-colors duration-300 sm:text-[17px] ${
            isOpen ? "text-white" : "text-white/75"
          }`}
        >
          {faq.question}
        </span>

        {/* Bouton */}
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-[#CC0864]/30 bg-[#CC0864] text-white"
              : "border-white/10 bg-white/[0.035] text-white/45 group-hover:border-[#CC0864]/30 group-hover:text-[#CC0864]"
          }`}
        >
          {isOpen ? (
            <Minus size={15} strokeWidth={2} />
          ) : (
            <Plus size={15} strokeWidth={2} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-7 sm:pl-[70px] sm:pr-20">
              <div className="relative">
                <div className="absolute -left-4 top-1 h-full w-px bg-gradient-to-b from-[#CC0864]/60 via-[#CC0864]/20 to-transparent" />

                <p className="max-w-3xl text-sm leading-7 text-white/45">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================================================
   FAQ
========================================================= */

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080808] py-24 text-white lg:py-32"
    >
      <SectionDivider position="top" />

      {/* Lumière d'ambiance */}
      <div
        className="pointer-events-none absolute left-1/2 top-32 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.035] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            Header
        ================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/20 bg-[#CC0864]/[0.06] px-4 py-2"
          >
            <Sparkles size={13} className="text-[#CC0864]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#CC0864]">
              Questions fréquentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
          >
            Tout savoir avant
            <br />
            <span className="text-white/40">de commencer.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            Retrouvez les réponses aux questions les plus fréquentes sur
            Zayan, votre boutique et les outils disponibles.
          </motion.p>
        </div>

        {/* =================================================
            FAQ LIST
        ================================================= */}
        <div className="relative mt-14 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:mt-20">
          {/* Ligne supérieure */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#CC0864]/40 to-transparent" />

          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={active === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* =================================================
            CTA
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-[28px] border border-[#CC0864]/15 bg-gradient-to-br from-[#CC0864]/[0.09] via-white/[0.025] to-transparent p-7 sm:p-8 lg:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#CC0864]/10 blur-[80px]" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CC0864]/20 bg-[#CC0864]/10">
                <MessageCircle
                  size={18}
                  className="text-[#CC0864]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  Vous avez encore une question ?
                </h3>

                <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/40">
                  Découvrez les offres Zayan et trouvez la formule adaptée
                  à votre activité.
                </p>
              </div>
            </div>

            <a
              href="#tarifs"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CC0864]/30 hover:bg-[#CC0864] hover:shadow-[0_10px_35px_rgba(204,8,100,0.2)]"
            >
              Voir les offres

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <SectionDivider position="bottom" />
    </section>
  );
}