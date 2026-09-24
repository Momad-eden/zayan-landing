"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Package,
  Receipt,
  ShoppingBag,
  Store,
  Truck,
  UserRoundCog,
  Users,
  Wallet,
  Warehouse,
} from "lucide-react";

const features = [
  {
    id: "boutique",
    category: "VENTE EN LIGNE",
    title: "Votre boutique en ligne",
    description:
      "Présentez vos produits, recevez vos commandes et donnez à votre activité une véritable présence en ligne.",
    icon: Store,
    accent: "from-pink-500/20 to-transparent",
  },
  {
    id: "commandes",
    category: "VENTES",
    title: "Toutes vos commandes au même endroit",
    description:
      "Centralisez les commandes provenant de votre boutique et gardez une vision claire de chaque vente.",
    icon: ShoppingBag,
    accent: "from-violet-500/20 to-transparent",
  },
  {
    id: "stock",
    category: "STOCK",
    title: "Gardez le contrôle de votre stock",
    description:
      "Suivez vos produits, vos quantités, vos inventaires et les mouvements de votre stock.",
    icon: Boxes,
    accent: "from-blue-500/20 to-transparent",
  },
  {
    id: "caisse",
    category: "VENTE PHYSIQUE",
    title: "Une caisse pour votre boutique",
    description:
      "Enregistrez vos ventes physiques, éditez vos tickets et retrouvez vos opérations depuis le même système.",
    icon: Calculator,
    accent: "from-orange-500/20 to-transparent",
  },
  {
    id: "finance",
    category: "FINANCE",
    title: "Suivez vos finances",
    description:
      "Factures, paiements et dépenses : gardez une vision structurée de l'argent qui entre et qui sort.",
    icon: Wallet,
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    id: "depenses",
    category: "DÉPENSES",
    title: "Maîtrisez vos dépenses",
    description:
      "Loyer, électricité, fournitures, transport et autres charges sont regroupés dans votre espace de gestion.",
    icon: CircleDollarSign,
    accent: "from-yellow-500/20 to-transparent",
  },
  {
    id: "rh",
    category: "RESSOURCES HUMAINES",
    title: "Gérez votre équipe",
    description:
      "Organisez vos collaborateurs, leurs rôles et les informations liées à leur rémunération.",
    icon: UserRoundCog,
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    id: "entrepot",
    category: "LOGISTIQUE",
    title: "Un entrepôt mieux organisé",
    description:
      "Structurez vos stocks et gardez une meilleure visibilité sur vos opérations logistiques.",
    icon: Warehouse,
    accent: "from-indigo-500/20 to-transparent",
  },
  {
    id: "livraison",
    category: "LIVRAISON",
    title: "Gérez vos livraisons",
    description:
      "Organisez le traitement et le suivi des livraisons directement depuis votre activité.",
    icon: Truck,
    accent: "from-red-500/20 to-transparent",
  },
];

const chartValues = [34, 45, 40, 58, 51, 67, 61, 76, 69, 86, 79, 94];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeFeature = features[activeIndex];

  function changeFeature(nextIndex) {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  function previous() {
    const next = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
    setDirection(-1);
    setActiveIndex(next);
  }

  function next() {
    const next = activeIndex === features.length - 1 ? 0 : activeIndex + 1;
    setDirection(1);
    setActiveIndex(next);
  }

  return (
    <section
      id="fonctionnalites"
      className="relative overflow-hidden bg-[#0d0a0d] text-white"
    >
      {/* =========================================================
          TRANSITION SUPÉRIEURE
      ========================================================== */}

      <SectionDivider position="top" />

      {/* Halo principal */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#CC0864]/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:px-8 lg:py-40">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CC0864]/25 bg-[#CC0864]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5b9e]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CC0864]" />
            L'écosystème Zayan
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Tout votre business.
            <span className="block text-[#ff4b96]">Un seul système.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Zayan réunit les outils essentiels à la gestion de votre activité
            beauté dans un environnement pensé pour évoluer avec votre
            entreprise.
          </p>
        </motion.div>

        {/* =========================================================
            DASHBOARD ANIMÉ
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          {/* halo */}
          <motion.div
            animate={{
              opacity: [0.25, 0.45, 0.25],
              scale: [0.96, 1.03, 0.96],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -inset-20 rounded-full bg-[#CC0864]/15 blur-[90px]"
          />

          {/* dashboard */}
          <AnimatedDashboard />
        </motion.div>

        {/* =========================================================
            PHRASE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-lg leading-8 text-white/60 sm:text-xl">
            Une seule plateforme pour{" "}
            <span className="font-semibold text-white">
              vendre, gérer, analyser et développer
            </span>{" "}
            votre activité.
          </p>
        </motion.div>

        {/* =========================================================
            MODULES — DESKTOP
        ========================================================== */}

        <div className="mt-28 hidden lg:block">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4b96]">
                Vos outils
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Chaque partie de votre activité,
                <br />
                au même endroit.
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/35">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(features.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="grid grid-cols-[280px_1fr] gap-10">
            {/* Navigation */}
            <div className="relative">
              <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10" />

              <div className="space-y-1">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => changeFeature(index)}
                      className="group relative flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left"
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? 1 : 0.75,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0d0a0d]"
                      >
                        <Icon size={15} />
                      </motion.span>

                      <span
                        className={`text-sm transition ${
                          isActive
                            ? "font-semibold text-white"
                            : "text-white/35 group-hover:text-white/70"
                        }`}
                      >
                        {feature.title}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="active-feature-line"
                          className="absolute left-0 h-8 w-[2px] rounded-full bg-[#CC0864]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contenu */}
            <FeatureShowcase feature={activeFeature} direction={direction} />
          </div>
        </div>

        {/* =========================================================
            CAROUSEL — MOBILE
        ========================================================== */}

        <div className="mt-24 lg:hidden">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4b96]">
                Vos outils
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Tout votre business.
              </h3>
            </div>

            <div className="text-sm text-white/40">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(features.length).padStart(2, "0")}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeFeature.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -80,
                }}
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <MobileFeature feature={activeFeature} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* contrôles */}
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={previous}
              aria-label="Fonctionnalité précédente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="flex items-center gap-1.5">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => changeFeature(index)}
                  aria-label={`Afficher ${feature.title}`}
                  className="p-1"
                >
                  <motion.span
                    animate={{
                      width: index === activeIndex ? 24 : 6,
                      opacity: index === activeIndex ? 1 : 0.25,
                    }}
                    className="block h-1.5 rounded-full bg-[#CC0864]"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Fonctionnalité suivante"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CC0864] transition hover:bg-[#e20b70]"
            >
              <ArrowRight size={17} />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-white/25">
            Faites glisser ou utilisez les flèches pour découvrir les outils.
          </p>
        </div>

        {/* =========================================================
            LIGNE DE MODULES
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-28 overflow-hidden"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0d0a0d] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0d0a0d] to-transparent" />

          <motion.div
            className="flex w-max items-center gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...features, ...features].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={`${feature.id}-${index}`}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-white/50"
                >
                  <Icon size={15} className="text-[#ff4b96]" />
                  {feature.title}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          TRANSITION INFÉRIEURE
      ========================================================== */}

      <SectionDivider position="bottom" />
    </section>
  );
}

/* ===============================================================
   DASHBOARD ANIMÉ
================================================================ */

function AnimatedDashboard() {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111011] shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
      {/* barre supérieure */}
      <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>

          <div className="hidden h-5 w-px bg-white/10 sm:block" />

          <div className="hidden text-xs font-semibold text-white/50 sm:block">
            Zayan
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#CC0864]/30" />
          <div className="hidden h-2 w-16 rounded-full bg-white/10 sm:block" />
        </div>
      </div>

      <div className="grid min-h-[500px] grid-cols-1 md:grid-cols-[190px_1fr]">
        {/* sidebar */}
        <div className="hidden border-r border-white/10 p-5 md:block">
          <div className="mb-8 h-7 w-24 rounded-md bg-[#CC0864]/20" />

          <div className="space-y-3">
            {[
              "Vue générale",
              "Commandes",
              "Produits",
              "Clients",
              "Stock",
              "Caisse",
              "Finance",
              "Équipe",
            ].map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[11px] ${
                  index === 0 ? "bg-[#CC0864]/10 text-white" : "text-white/30"
                }`}
              >
                <span className="h-3 w-3 rounded bg-current opacity-50" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* contenu */}
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                Tableau de bord
              </p>

              <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                Vue générale
              </h3>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-white/40">
              Cette période
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <DashboardKpi
              label="Ventes"
              value="24 850"
              suffix=" F"
              change="+18,4%"
              positive
            />

            <DashboardKpi
              label="Commandes"
              value="128"
              change="+12,6%"
              positive
            />

            <DashboardKpi label="Clients" value="342" change="+8,2%" positive />

            <DashboardKpi
              label="Stock faible"
              value="07"
              change="À surveiller"
            />
          </div>

          {/* graphiques */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_0.8fr]">
            {/* chart principal */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Évolution
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">
                    Ventes
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-emerald-400">
                  <TrendingDot />
                  +18,4%
                </div>
              </div>

              <AnimatedLineChart />
            </div>

            {/* commandes */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Activité
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">
                    Commandes
                  </p>
                </div>

                <ShoppingBag size={16} className="text-[#ff4b96]" />
              </div>

              <div className="mt-5 space-y-4">
                <OrderRow
                  number="#Z-1284"
                  client="Cliente"
                  amount="12 500 F"
                  status="Payée"
                  statusClass="text-emerald-400 bg-emerald-400/10"
                />

                <OrderRow
                  number="#Z-1283"
                  client="Cliente"
                  amount="8 900 F"
                  status="Préparation"
                  statusClass="text-yellow-400 bg-yellow-400/10"
                />

                <OrderRow
                  number="#Z-1282"
                  client="Cliente"
                  amount="17 500 F"
                  status="Livrée"
                  statusClass="text-blue-400 bg-blue-400/10"
                />

                <OrderRow
                  number="#Z-1281"
                  client="Cliente"
                  amount="6 500 F"
                  status="Payée"
                  statusClass="text-emerald-400 bg-emerald-400/10"
                />
              </div>
            </div>
          </div>

          {/* bas */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MiniDashboardChart
              icon={Boxes}
              label="Stock"
              value="92%"
              type="bars"
            />

            <MiniDashboardChart
              icon={Wallet}
              label="Dépenses"
              value="145 000 F"
              type="bars"
            />

            <MiniDashboardChart
              icon={Users}
              label="Équipe"
              value="08"
              type="people"
            />
          </div>
        </div>
      </div>

      {/* label flottant */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-4 top-16 hidden rounded-full border border-[#CC0864]/20 bg-[#CC0864]/10 px-3 py-1.5 text-[10px] font-semibold text-[#ff5b9e] shadow-xl sm:block"
      >
        Zayan OS
      </motion.div>
    </div>
  );
}

/* ===============================================================
   KPI
================================================================ */

function DashboardKpi({ label, value, suffix, change, positive }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-xl border border-white/10 bg-white/[0.025] p-3 sm:p-4"
    >
      <p className="text-[9px] uppercase tracking-wider text-white/30">
        {label}
      </p>

      <div className="mt-2 flex items-baseline gap-0.5">
        <span className="text-lg font-semibold tracking-tight sm:text-xl">
          {value}
        </span>

        {suffix && <span className="text-[10px] text-white/35">{suffix}</span>}
      </div>

      <div
        className={`mt-1 text-[9px] ${
          positive ? "text-emerald-400" : "text-yellow-400"
        }`}
      >
        {change}
      </div>
    </motion.div>
  );
}

/* ===============================================================
   GRAPHIQUE SVG
================================================================ */

function AnimatedLineChart() {
  return (
    <div className="relative mt-5 h-44 overflow-hidden">
      {/* lignes */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[1, 2, 3, 4].map((line) => (
          <div key={line} className="border-t border-white/[0.055]" />
        ))}
      </div>

      <svg
        viewBox="0 0 700 190"
        preserveAspectRatio="none"
        className="relative h-full w-full"
      >
        <defs>
          <linearGradient id="salesGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#CC0864" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#CC0864" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 150 C55 130 75 142 115 118 S170 95 215 112 S265 92 315 100 S365 75 410 86 S465 52 510 70 S565 45 610 58 S660 24 700 35 L700 190 L0 190 Z"
          fill="url(#salesGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.path
          d="M0 150 C55 130 75 142 115 118 S170 95 215 112 S265 92 315 100 S365 75 410 86 S465 52 510 70 S565 45 610 58 S660 24 700 35"
          fill="none"
          stroke="#ff4b96"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="700"
          cy="35"
          r="6"
          fill="#CC0864"
          stroke="#fff"
          strokeWidth="3"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0, 1.2, 1],
          }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
        />
      </svg>

      <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[8px] text-white/20">
        <span>Lun</span>
        <span>Mar</span>
        <span>Mer</span>
        <span>Jeu</span>
        <span>Ven</span>
        <span>Sam</span>
        <span>Dim</span>
      </div>
    </div>
  );
}

/* ===============================================================
   COMMANDE
================================================================ */

function OrderRow({ number, client, amount, status, statusClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
        <ShoppingBag size={13} className="text-white/40" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-medium text-white/70">
          {number}
        </p>
        <p className="text-[9px] text-white/25">{client}</p>
      </div>

      <div className="text-right">
        <p className="text-[10px] text-white/60">{amount}</p>

        <span
          className={`mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[7px] ${statusClass}`}
        >
          {status}
        </span>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   MINI GRAPHIQUES
================================================================ */

function MiniDashboardChart({ icon: Icon, label, value, type }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={14} className="text-white/40" />
          <span className="text-[10px] text-white/35">{label}</span>
        </div>

        <span className="text-xs font-semibold text-white/70">{value}</span>
      </div>

      {type === "bars" && (
        <div className="mt-4 flex h-8 items-end gap-1">
          {[30, 50, 38, 62, 47, 72, 58, 86, 68, 94].map((height, index) => (
            <motion.span
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
              className="flex-1 rounded-t-sm bg-[#CC0864]/50"
            />
          ))}
        </div>
      )}

      {type === "people" && (
        <div className="mt-4 flex items-center gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((person) => (
            <motion.div
              key={person}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: person * 0.07 }}
              className="h-6 w-6 rounded-full border border-[#CC0864]/20 bg-[#CC0864]/10"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ===============================================================
   DESKTOP SHOWCASE
================================================================ */

function FeatureShowcase({ feature, direction }) {
  const Icon = feature.icon;

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={feature.id}
        custom={direction}
        initial={{
          opacity: 0,
          x: direction * 70,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: direction * -70,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${feature.accent} bg-white/[0.02] p-8`}
      >
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#CC0864]/10 blur-[80px]" />

        <div className="relative grid h-full items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CC0864]/10 text-[#ff4b96]">
              <Icon size={22} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#ff4b96]">
              {feature.category}
            </p>

            <h4 className="mt-3 max-w-md text-3xl font-semibold tracking-tight">
              {feature.title}
            </h4>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              {feature.description}
            </p>

            <div className="mt-7 flex items-center gap-2 text-xs text-white/40">
              <CheckCircle2 size={14} className="text-[#CC0864]" />
              Intégré à votre espace Zayan
            </div>
          </div>

          <FeatureVisual featureId={feature.id} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ===============================================================
   VISUELS DES FONCTIONNALITÉS
================================================================ */

function FeatureVisual({ featureId }) {
  if (featureId === "stock" || featureId === "entrepot") {
    return (
      <div className="relative rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs text-white/40">Inventaire</span>

          <Boxes size={15} className="text-blue-400" />
        </div>

        <div className="space-y-4">
          {[
            ["Parfum", "84%", "bg-emerald-400"],
            ["Soin visage", "62%", "bg-blue-400"],
            ["Accessoires", "38%", "bg-yellow-400"],
            ["Maquillage", "18%", "bg-red-400"],
          ].map(([name, percent, color], index) => (
            <div key={name}>
              <div className="mb-1.5 flex justify-between text-[10px]">
                <span className="text-white/45">{name}</span>
                <span className="text-white/30">{percent}</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: percent }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                  className={`h-full rounded-full ${color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === "caisse") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Caisse</span>
          <Calculator size={16} className="text-orange-400" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0", "✓"].map(
            (number, index) => (
              <motion.div
                key={`${number}-${index}`}
                whileHover={{ scale: 1.05 }}
                className={`flex h-10 items-center justify-center rounded-lg border border-white/5 ${
                  number === "✓"
                    ? "bg-[#CC0864] text-white"
                    : "bg-white/[0.035] text-white/45"
                }`}
              >
                {number}
              </motion.div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (featureId === "depenses" || featureId === "finance") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Répartition</span>
          <Wallet size={16} className="text-emerald-400" />
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="relative h-40 w-40">
            <motion.div
              initial={{ rotate: -90, pathLength: 0 }}
              animate={{ rotate: -90, pathLength: 0.72 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 rounded-full border-[18px] border-emerald-400/70"
            />

            <div className="absolute inset-[18px] rounded-full bg-[#111011]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold">72%</span>
              <span className="text-[9px] text-white/30">suivi</span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[9px] text-white/35">
          <span>Achats</span>
          <span>Charges</span>
          <span>Transport</span>
        </div>
      </div>
    );
  }

  if (featureId === "rh") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Équipe</span>
          <Users size={16} className="text-cyan-400" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {["Aminata", "Fatou", "Moussa", "Ibrah"].map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 rounded-xl bg-white/[0.035] p-3"
            >
              <div className="h-8 w-8 rounded-full bg-cyan-400/10" />
              <div>
                <p className="text-[10px] text-white/60">{name}</p>
                <p className="text-[8px] text-white/25">Collaborateur</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === "livraison") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Suivi des livraisons</span>

          <Truck size={16} className="text-red-400" />
        </div>

        <div className="relative mt-8">
          <div className="absolute left-3 right-3 top-3 h-px bg-white/10" />

          <div className="relative flex justify-between">
            {[
              ["Commande", true],
              ["Préparation", true],
              ["Expédition", true],
              ["Livraison", false],
            ].map(([label, done], index) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative z-10 h-6 w-6 rounded-full border ${
                    done
                      ? "border-[#CC0864] bg-[#CC0864]"
                      : "border-white/15 bg-[#111011]"
                  }`}
                />

                <span className="text-[8px] text-white/30">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (featureId === "commandes") {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Commandes récentes</span>
          <ShoppingBag size={16} className="text-violet-400" />
        </div>

        <div className="mt-5 space-y-2">
          {[
            ["#1284", "12 500 F", "Payée"],
            ["#1283", "8 900 F", "Préparation"],
            ["#1282", "17 500 F", "Livrée"],
            ["#1281", "6 500 F", "Payée"],
          ].map(([id, amount, status], index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center justify-between rounded-lg bg-white/[0.035] px-3 py-3"
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-violet-400/10" />
                <span className="text-[10px] text-white/50">{id}</span>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-white/60">{amount}</p>
                <p className="text-[8px] text-white/25">{status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === "boutique") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* Halo derrière l'image */}
        <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[#CC0864]/15 blur-[70px]" />

        {/* Cadre de la boutique */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111011] shadow-2xl shadow-black/40">
          {/* Barre navigateur */}
          <div className="flex h-10 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
            </div>

            <div className="hidden h-5 max-w-[220px] flex-1 items-center justify-center sm:flex">
              <div className="w-full max-w-[180px] rounded-full border border-white/5 bg-white/[0.035] px-3 py-1 text-center text-[8px] text-white/20">
                boutique.zayan-sn.com
              </div>
            </div>

            <div className="h-5 w-5 rounded-full bg-[#CC0864]/20" />
          </div>

          {/* Image */}
          <div className="relative overflow-hidden bg-black">
            <motion.img
              src="/assets/features/boutique-en-ligne.png"
              alt="Exemple de boutique en ligne Zayan"
              className="block h-auto w-full object-cover"
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* léger voile */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Badge flottant */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            opacity: {
              duration: 0.5,
              delay: 0.4,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
          absolute -bottom-4 right-4
          flex items-center gap-2
          rounded-full
          border border-[#CC0864]/20
          bg-[#151015]/95
          px-3 py-2
          text-[10px] font-semibold
          text-white/70
          shadow-xl shadow-black/40
          backdrop-blur-xl
          sm:right-6
        "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
          Boutique en ligne active
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/40">Facturation</span>
        <Receipt size={16} className="text-pink-400" />
      </div>

      <div className="mt-5 space-y-3">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ width: 0 }}
            animate={{ width: `${75 - item * 12}%` }}
            transition={{ duration: 0.7, delay: item * 0.1 }}
            className="h-8 rounded-lg bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}

/* ===============================================================
   MOBILE FEATURE
================================================================ */

function MobileFeature({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="relative min-h-[500px] overflow-hidden p-6 sm:p-8">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#CC0864]/10 blur-[80px]" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CC0864]/10 text-[#ff4b96]">
          <Icon size={21} />
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#ff4b96]">
          {feature.category}
        </p>

        <h4 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
          {feature.title}
        </h4>

        <p className="mt-5 text-sm leading-7 text-white/45">
          {feature.description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-xs text-white/40">
          <CheckCircle2 size={14} className="text-[#CC0864]" />
          Intégré à votre espace Zayan
        </div>

        <div className="mt-10">
          <FeatureVisual featureId={feature.id} />
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   INDICATEUR
================================================================ */

function TrendingDot() {
  return (
    <motion.span
      animate={{ scale: [1, 1.4, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
    />
  );
}

/* ===============================================================
   SÉPARATIONS ORGANIQUES
================================================================ */

function SectionDivider({ position }) {
  const isTop = position === "top";

  return (
    <div
      className={`pointer-events-none relative z-20 w-full overflow-hidden ${
        isTop ? "h-28" : "h-32"
      }`}
    >
      {isTop ? (
        <>
          <div className="absolute left-1/2 top-10 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#CC0864]/20 blur-[70px]" />

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
              strokeOpacity="0.18"
              strokeWidth="2"
            />
          </svg>
        </>
      ) : (
        <>
          <div className="absolute bottom-0 left-1/2 h-32 w-[75%] -translate-x-1/2 rounded-full bg-[#CC0864]/15 blur-[80px]" />

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
              strokeOpacity="0.18"
              strokeWidth="2"
            />
          </svg>
        </>
      )}
    </div>
  );
}
