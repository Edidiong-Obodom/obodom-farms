"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  FlaskConical,
  ShieldCheck,
  Sprout,
  Trees,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 3.6,
      repeat: Number.POSITIVE_INFINITY,
      ease: easeInOut,
    },
  },
};

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/2349020696451";
  const capabilityDeckLink =
    "mailto:contact@obodomfarms.com?subject=Capability%20Deck%20Request";
  const cultivationPlaybookLink =
    "mailto:contact@obodomfarms.com?subject=Cultivation%20Playbook%20Request";

  const pillars = [
    {
      icon: Sprout,
      title: "Regenerative by Design",
      description:
        "Soil-first practices, cover crops, and smart rotation programs that protect the land and your yields.",
    },
    {
      icon: Droplets,
      title: "Water Intelligence",
      description:
        "Precision irrigation, on-field telemetry, and data-led scheduling to save every drop.",
    },
    {
      icon: Users,
      title: "Community Wealth",
      description:
        "Training, fair value chains, and shared prosperity with our farmers and partners.",
    },
    {
      icon: ShieldCheck,
      title: "Traceable Quality",
      description:
        "Lab-backed testing, cold-chain discipline, and transparent reporting from seed to shelf.",
    },
  ];

  const programs = [
    {
      title: "Export Grade Peppers",
      detail:
        "Grown with rigorous post-harvest handling for crisp, vibrant produce that travels beautifully.",
      badge: "Peppers • Leafy greens",
    },
    {
      title: "Integrated Seedlings Hub",
      detail:
        "Controlled germination, uniform seedlings, and agronomy guidance bundled together.",
      badge: "Nursery",
    },
    {
      title: "Climate-Smart Irrigation",
      detail:
        "Automated drip systems, moisture sensing, and adaptive scheduling tuned to your plots.",
      badge: "Water",
    },
    {
      title: "Outgrower Success Program",
      detail:
        "Input financing, trainings, and guaranteed offtake to derisk every season.",
      badge: "Partners",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Rooted in family land",
      copy: "Started as few acres in Ogun State focused on peppers.",
    },
    {
      year: "2025",
      title: "Data enters the farm",
      copy: "Deployed our first sensor stack for moisture, canopy, and yield tracking.",
    },
    {
      year: "2025",
      title: "Integrated supply chain",
      copy: "Cold rooms, processing lines, and logistics partners to deliver fresher produce.",
    },
    {
      year: "2025",
      title: "Regenerative lab",
      copy: "In-house soil and leaf testing to close the loop on nutrients.",
    },
  ];

  const testimonials = [
    {
      name: "Ifeanyi N.",
      title: "Outgrower, Anambra",
      quote:
        "Obodom’s extension team turned my peppers into a dependable export stream. They show up, they measure, they teach.",
    },
    {
      name: "Chiamaka E.",
      title: "Procurement Lead, Retail",
      quote:
        "Their cold-chain discipline is elite. Produce arrives vibrant, consistent, and fully traceable every single week.",
    },
  ];

  const stats = [
    { number: "1+", label: "One year cultivating excellence" },
    { number: "28%", label: "Water saved via smart drip" },
    { number: "500+", label: "Outgrower farmers supported" },
    { number: "24/7", label: "Cold-chain ready logistics" },
  ];

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/img/Obodom_Integrated_farms_logo.png"
              alt="Obodom Integrated Farms Logo"
              width={68}
              height={68}
              className="h-14 w-14 md:h-16 md:w-16"
            />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline-flex">
              Obodom Farms. Rooted in science. Thriving on soil.
            </span>
          </motion.div>
          <div className="flex items-center gap-3">
            <motion.a
              className="hidden rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition hover:border-primary hover:text-primary md:inline-flex"
              href="#operations"
              whileHover={{ y: -1 }}
            >
              View field reports
            </motion.a>
            <motion.a
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-xl"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Plan a farm tour <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Carbon-smart. Export-ready. Field-proven.
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Integrated farming that feels boutique, scales like an ecosystem.
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground sm:text-xl"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              From soil diagnostics to cold-chain delivery, we orchestrate every
              season with precision, community-first partnerships, and
              regenerative intent.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <motion.a
                className="w-full rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:shadow-xl sm:w-auto"
                href="#pillars"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore our ecosystem
              </motion.a>
              <motion.a
                className="w-full rounded-xl border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary sm:w-auto"
                href={capabilityDeckLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download capability deck
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1"
                  variants={itemVariants}
                >
                  <div className="text-2xl font-semibold text-foreground">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-3xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-background shadow-2xl"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative h-[420px] w-full">
                <Image
                  src="/img/img-2.png"
                  alt="Obodom Integrated Farms fields"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border bg-background/70 p-4 text-sm">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Soil lab
                  </p>
                  <p className="font-semibold text-foreground">
                    Nutrient-balanced plots live monitored weekly.
                  </p>
                </div>
                <div className="space-y-1 pl-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Cold-chain
                  </p>
                  <p className="font-semibold text-foreground">
                    Harvest to hub in under 90 minutes on average.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8" id="pillars">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-border/80 bg-background/60 p-10 shadow-lg shadow-primary/10 backdrop-blur"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Integrated value chain, zero guesswork.
              </h2>
              <p className="text-muted-foreground">
                Every discipline is orchestrated—nursery, crop care, harvest
                handling, logistics, and transparent reporting—so you get
                reliability at scale.
              </p>
            </div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary"
              variants={itemVariants}
            >
              Certified for export • HACCP-aligned workflows
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-background via-background to-primary/5 p-6"
                variants={itemVariants}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                animate={{
                  y: hoveredFeature === index ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="operations">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Operational artistry you can feel.
              </h2>
              <p className="text-muted-foreground">
                We treat every hectare like a lab—measured, optimized, and
                nurtured for peak flavor and yield.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="h-2 w-2 rounded-full bg-primary"
              />
              Real-time telemetry • Weekly agronomy reports
            </div>
          </div>

          <motion.div
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-border bg-background/70 shadow-xl"
              variants={itemVariants}
            >
              <motion.div
                className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-2xl"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative h-[360px] w-full">
                <Image
                  src="/img/img-1.png"
                  alt="Irrigation system on the field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-1 divide-y divide-border border-t border-border bg-background/80 text-sm sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                <div className="p-4 sm:p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Telemetry
                  </p>
                  <p className="font-semibold text-foreground">
                    Canopy, soil moisture, microclimate.
                  </p>
                </div>
                <div className="p-4 sm:px-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Nutrition
                  </p>
                  <p className="font-semibold text-foreground">
                    Balanced fertigation with lab validation.
                  </p>
                </div>
                <div className="p-4 sm:pl-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Responsiveness
                  </p>
                  <p className="font-semibold text-foreground">
                    Agronomists on-site within 24h of alerts.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-5" variants={itemVariants}>
              {programs.map((program) => (
                <motion.div
                  key={program.title}
                  className="group rounded-2xl border border-border bg-gradient-to-br from-background via-background to-primary/5 p-5 transition hover:-translate-y-1 hover:border-primary/60"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {program.badge}
                  </div>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {program.detail}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              A journey of deliberate milestones.
            </h2>
            <p className="text-muted-foreground">
              Every season sharpened our craft. Here is how we got here.
            </p>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {milestones.map((item, i) => (
              <motion.div
                key={`${i}-${item.year}`}
                className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background p-6 shadow-sm shadow-primary/10"
                variants={itemVariants}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Voices from our fields.
            </h2>
            <p className="text-muted-foreground">
              Partners, outgrowers, and buyers on the difference they feel.
            </p>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-6 shadow-lg"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/15 blur-2xl transition group-hover:scale-110"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                />
                <p className="relative text-lg text-foreground">
                  “{item.quote}”
                </p>
                <div className="relative mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {item.name}
                  </span>{" "}
                  — {item.title}
                </div>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col gap-6 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-10 shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ready to build a resilient supply?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let us design a season plan tailored to your hectares, market,
                and sustainability goals.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <a
                className="rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-xl transition hover:shadow-2xl"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a strategy call
              </a>
              <a
                className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                href={cultivationPlaybookLink}
              >
                Download cultivation playbook
              </a>
            </motion.div>
          </div>
          <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
            <div className="flex items-start gap-3 sm:items-center">
              <Trees className="h-5 w-5 text-primary" />
              <span>Agile crop planning with regenerative guardrails.</span>
            </div>
            <div className="flex items-start gap-3 sm:items-center">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span>In-house soil & leaf labs for rapid diagnosis.</span>
            </div>
            <div className="flex items-start gap-3 sm:items-center">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>
                Seasonal scorecards so every stakeholder stays aligned.
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-primary text-primary-foreground px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Obodom Integrated Farms</h4>
              <p className="text-sm opacity-80">
                Building resilient African agriculture with science, community,
                and regenerative intent.
              </p>
              <p className="text-sm opacity-80">RC No: 9020393</p>
              <p className="text-sm opacity-80">Federal Republic of Nigeria</p>
            </div>
            <div>
              <h4 className="font-semibold">About</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Our Story</li>
                <li>Team & Careers</li>
                <li>Ethics & Sustainability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Fresh Produce</li>
                <li>Nursery Programs</li>
                <li>Advisory & Labs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a
                    href="mailto:contact@obodomfarms.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    contact@obodomfarms.com
                  </a>
                </li>
                <li>Ogun • Lagos • Abuja</li>
                <li>Follow on LinkedIn</li>
                <li>
                  <a
                    href="tel:+2349020696451"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 902 069 6451
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} Obodom Integrated Farms LTD.
            Thriving together.
          </div>
        </div>
      </footer>
    </main>
  );
}
