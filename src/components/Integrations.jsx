"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Globe,
  Mail,
  MessageCircle,
  Smartphone,
  Megaphone,
} from "lucide-react";

/* ============================================================
   DATA
============================================================ */

const integrations = [
  {
    name: "Facebook Ads",
    text: "Promouvez vos produits et touchez de nouveaux clients.",
    type: "facebook",
  },
  {
    name: "Instagram",
    text: "Présentez votre univers et développez votre marque.",
    type: "instagram",
  },
  {
    name: "YouTube",
    text: "Développez votre visibilité grâce au contenu vidéo.",
    type: "youtube",
  },
  {
    name: "WhatsApp",
    text: "Échangez avec vos clients et accompagnez vos ventes.",
    type: "whatsapp",
  },
  {
    name: "Wave",
    text: "Facilitez les paiements avec une solution utilisée au Sénégal.",
    type: "wave",
  },
  {
    name: "Google",
    text: "Simplifiez l'accès à votre espace avec votre compte Google.",
    type: "google",
  },
  {
    name: "E-mail",
    text: "Recevez les informations importantes de votre activité.",
    type: "email",
  },
];

/* ============================================================
   ICONS
============================================================ */

function IntegrationIcon({ type }) {
  /* Facebook */
  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 8H16V4.5C15.57 4.44 14.42 4.33 13.08 4.33C10.28 4.33 8.36 6.04 8.36 9.2V12H5.19V16H8.36V24H12.24V16H15.3L15.79 12H12.24V9.55C12.24 8.39 12.56 8 13.5 8Z" />
      </svg>
    );
  }

  /* Instagram */
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
        />

        <circle
          cx="17.4"
          cy="6.7"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  /* YouTube */
  if (type === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.37.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.87.51 9.37.51 9.37.51s7.5 0 9.37-.51a3.02 3.02 0 0 0 2.13-2.14c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.55 15.58V8.42L15.82 12l-6.27 3.58Z" />
      </svg>
    );
  }

  /* WhatsApp */
  if (type === "whatsapp") {
    return (
      <MessageCircle
        size={21}
        strokeWidth={1.8}
      />
    );
  }

  /* Wave */
  if (type === "wave") {
    return (
      <div className="flex items-center justify-center text-[15px] font-black tracking-tight">
        W
      </div>
    );
  }

  /* Google */
  if (type === "google") {
    return (
      <Globe
        size={21}
        strokeWidth={1.8}
      />
    );
  }

  /* Email */
  if (type === "email") {
    return (
      <Mail
        size={21}
        strokeWidth={1.8}
      />
    );
  }

  return (
    <Megaphone
      size={21}
      strokeWidth={1.8}
    />
  );
}

/* ============================================================
   CARD
============================================================ */

function IntegrationCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#CC0864]/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#CC0864]/10 text-[#ff4b96] ring-1 ring-[#CC0864]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#CC0864]/15">
          <IntegrationIcon type={item.type} />
        </div>

        {/* Content */}
        <div className="pr-5">
          <h3 className="font-semibold text-white">
            {item.name}
          </h3>

          <p className="mt-1.5 text-sm leading-6 text-white/50">
            {item.text}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={17}
        className="absolute right-4 top-4 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff4b96]"
      />
    </motion.div>
  );
}

/* ============================================================
   CONNECTION
============================================================ */

function Connection({
  className,
  delay = 0,
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden overflow-hidden lg:block ${className}`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#CC0864]/30 to-transparent" />

      <motion.span
        initial={{
          left: "-10%",
        }}
        animate={{
          left: "110%",
        }}
        transition={{
          duration: 2.8,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#ff4b96] shadow-[0_0_14px_#ff4b96]"
      />
    </div>
  );
}

/* ============================================================
   ZAYAN CORE
============================================================ */

function ZayanCore() {
  return (
    <div className="relative flex h-44 w-44 items-center justify-center">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#CC0864]/20 blur-3xl"
      />

      {/* Grande orbite */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-2 rounded-full border border-dashed border-[#CC0864]/25"
      />

      {/* Petite orbite */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-7 rounded-full border border-white/[0.05]"
      />

      {/* Centre */}
      <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#CC0864]/40 bg-[#10090d] shadow-[0_0_60px_rgba(204,8,100,0.18)]">

        <div className="text-2xl font-bold tracking-tight text-white">
          zayan
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#ff4b96]">
          business system
        </div>

      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#080808] py-24 text-white lg:py-32"
    >

      {/* ======================================================
          TOP ORGANIC TRANSITION
      ======================================================= */}

      <div className="absolute left-0 right-0 top-0 -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          className="block h-[70px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C180,95 300,15 500,45 C700,75 820,90 1040,40 C1220,0 1320,30 1440,55 L1440,0 L0,0 Z"
            fill="#faf8fa"
          />
        </svg>
      </div>

      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Centre glow */}
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.045] blur-[140px]" />

        {/* Left glow */}
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-[#CC0864]/[0.025] blur-[120px]" />

        {/* Right glow */}
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#CC0864]/[0.025] blur-[120px]" />

      </div>

      {/* ======================================================
          CONTENT
      ======================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/20 bg-[#CC0864]/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#ff4b96]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4b96] shadow-[0_0_10px_#ff4b96]" />

            Votre environnement digital
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Développez votre visibilité

            <span className="block text-white/40">
              au-delà de votre boutique.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.16,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
          >
            Zayan vous aide à connecter votre activité à votre environnement
            digital et à utiliser les principaux canaux de communication,
            de vente et de marketing.
          </motion.p>

        </div>

        {/* ====================================================
            DESKTOP ECOSYSTEM
        ===================================================== */}

        <div className="relative mx-auto mt-20 hidden min-h-[600px] max-w-6xl lg:block">

          {/* Centre Zayan */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <ZayanCore />
          </div>

          {/* Grande orbite */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]"
          />

          {/* Petite orbite */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CC0864]/[0.06]"
          />

          {/* ==================================================
              FACEBOOK ADS
          =================================================== */}

          <div className="absolute left-1/2 top-0 z-10 w-64 -translate-x-1/2">
            <IntegrationCard
              item={integrations[0]}
              index={0}
            />
          </div>

          {/* ==================================================
              INSTAGRAM
          =================================================== */}

          <div className="absolute right-0 top-24 z-10 w-64">
            <IntegrationCard
              item={integrations[1]}
              index={1}
            />
          </div>

          {/* ==================================================
              YOUTUBE
          =================================================== */}

          <div className="absolute bottom-24 right-0 z-10 w-64">
            <IntegrationCard
              item={integrations[2]}
              index={2}
            />
          </div>

          {/* ==================================================
              WHATSAPP
          =================================================== */}

          <div className="absolute bottom-0 left-1/2 z-10 w-64 -translate-x-1/2">
            <IntegrationCard
              item={integrations[3]}
              index={3}
            />
          </div>

          {/* ==================================================
              WAVE
          =================================================== */}

          <div className="absolute bottom-24 left-0 z-10 w-64">
            <IntegrationCard
              item={integrations[4]}
              index={4}
            />
          </div>

          {/* ==================================================
              GOOGLE
          =================================================== */}

          <div className="absolute left-0 top-24 z-10 w-64">
            <IntegrationCard
              item={integrations[5]}
              index={5}
            />
          </div>

          {/* ==================================================
              EMAIL
          =================================================== */}

          <div className="absolute left-1/2 top-[43%] z-10 w-64 -translate-x-[340px]">
            <IntegrationCard
              item={integrations[6]}
              index={6}
            />
          </div>

          {/* ==================================================
              CONNECTIONS
          =================================================== */}

          {/* Facebook Ads */}
          <Connection
            className="left-1/2 top-[115px] w-[2px] -translate-x-1/2 rotate-90"
            delay={0}
          />

          {/* Instagram */}
          <Connection
            className="left-[62%] top-[220px] w-[150px] rotate-[25deg]"
            delay={0.4}
          />

          {/* YouTube */}
          <Connection
            className="left-[62%] top-[380px] w-[150px] -rotate-[25deg]"
            delay={0.8}
          />

          {/* WhatsApp */}
          <Connection
            className="bottom-[110px] left-1/2 w-[2px] -translate-x-1/2 rotate-90"
            delay={1.2}
          />

          {/* Wave */}
          <Connection
            className="left-[27%] top-[380px] w-[150px] rotate-[25deg]"
            delay={1.6}
          />

          {/* Google */}
          <Connection
            className="left-[27%] top-[220px] w-[150px] -rotate-[25deg]"
            delay={2}
          />

        </div>

        {/* ====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:hidden">

          {integrations.map((item, index) => (
            <IntegrationCard
              key={item.name}
              item={item}
              index={index}
            />
          ))}

        </div>

        {/* ====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-sm leading-7 text-white/40 sm:text-base">
            <span className="text-white/70">
              Vendre. Communiquer. Promouvoir.
            </span>{" "}
            Zayan devient le point central de votre activité, tandis que vos
            outils marketing et vos canaux de communication vous permettent
            d'aller plus loin.
          </p>
        </motion.div>

      </div>

      {/* ======================================================
          BOTTOM ORGANIC TRANSITION
      ======================================================= */}

      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          className="block h-[70px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C180,15 300,95 500,55 C700,20 820,10 1040,60 C1220,100 1320,65 1440,40 L1440,100 L0,100 Z"
            fill="#080808"
          />
        </svg>
      </div>

    </section>
  );
}