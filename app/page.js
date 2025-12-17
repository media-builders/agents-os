"use client";

import { useMemo, useState } from "react";
import RadialOrbitVisualizer from "../components/frontend/homepage/RadialOrbitVisualizer";
import styles from "./page.module.css";

const personaTabs = [
  {
    id: "agent",
    label: "Agent",
    bullets: ["Warm leads surfaced automatically", "No more manual notes", "Follow-up keeps running during showings"],
  },
  {
    id: "leader",
    label: "Sales Leader",
    bullets: ["Standardized sequences", "Coaching visibility", "QA + outcomes by rep/source"],
  },
  {
    id: "ops",
    label: "Ops/RevOps",
    bullets: ["Cleaner data", "Integrations to reduce double-entry", "Role-based admin controls"],
  },
  {
    id: "compliance",
    label: "Compliance",
    bullets: ["Consent-aware messaging", "Disclosure guidance", "Audit logs + policy enforcement"],
  },
];

const solutionCards = [
  {
    title: "1) Data foundation",
    text: "Import, dedupe, normalize fields, and set governance (sources, owners, naming, tags).",
    proof: "30-day hygiene milestone with measurable dedupe rate + field completion",
  },
  {
    title: "2) Multi-channel engagement with controls",
    text: "AI-assisted SMS/voice follow-up with consent-aware routing, escalation rules, and configurable scripts.",
    proof: "Speed-to-lead <60 seconds; per-source rules to reduce risk",
  },
  {
    title: "3) Auto-logging + outcome analytics",
    text: "Every interaction is logged; warm leads are surfaced; leaders get reporting on sequence performance by source/rep.",
    proof: "Reduced manual admin; higher follow-up completion; appointment lift",
  },
];

const demoFlow = [
  "Lead intake: routing by source + consent status",
  "Engagement: AI message/call with disclosure and escalation rules",
  "Handoff: calendar booking + context summary for rep",
  "Logging: full timeline, tags, next-best-action, audit trail",
];

const benchmarks = [
  { label: "Speed-to-lead", value: "<60s target" },
  { label: "Follow-up completion", value: "90%+" },
  { label: "Appointment rate", value: "Lift vs baseline" },
  { label: "Reactivation rate", value: "Measured per source" },
];

const tiers = [
  {
    name: "Starter",
    bestFor: "solo/low complexity",
    cta: "Start trial",
    href: "/start",
    notes: ["Templates included", "Guided onboarding"],
  },
  {
    name: "Pro",
    bestFor: "teams scaling follow-up",
    cta: "Start now",
    href: "/start",
    notes: ["Team reporting", "Admin controls"],
  },
  {
    name: "Enterprise",
    bestFor: "compliance + governance needs",
    cta: "Book a call",
    href: "/book",
    notes: ["SLA", "Security review support", "Custom integrations"],
  },
];

const objections = [
  "AI voice sounding robotic / brand voice governance",
  "TCPA/consent/disclosure workflows and audit trail",
  "Setup effort, adoption plan, and time-to-value milestones",
  "Integrations and data ownership/export",
  "ROI expectations and measurement windows",
  "Support model and SLA (enterprise)",
];

export default function HomePage() {
  const [activePersona, setActivePersona] = useState(personaTabs[0].id);
  const activePanel = useMemo(
    () => personaTabs.find((tab) => tab.id === activePersona) ?? personaTabs[0],
    [activePersona],
  );

  return (
    <main className={styles.page}>
      <div className={styles.gradientGlow} aria-hidden />

      <header className={styles.topbar}>
        <div className={styles.logoMark}>
          <span className={styles.logoDot} />
          <span>AgentsOS</span>
        </div>
        <nav className={styles.navLinks}>
          {["Product", "Solutions", "Pricing", "Case Studies", "Security", "Resources", "Contact"].map((item) => (
            <a key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className={styles.utilityNav}>
          <a href="/login">Login</a>
          <a href="/status">Status</a>
          <a href="/support">Support</a>
          <a className={styles.secondaryCTA} href="/security#request">
            Request Security Packet
          </a>
        </div>
      </header>

      <section id="hero" className={`${styles.section} ${styles.hero}`}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Enterprise-ready AI dialer + CRM</p>
              <h1 className={styles.h1}>Turn leads into booked appointments - fast, consistent, and compliant.</h1>
              <p className={styles.lead}>
                AI-powered CRM + dialer that responds in seconds, logs everything automatically, and escalates only warm
                conversations to your team - so you win more appointments without more admin.
              </p>
              <div className={styles.proofChips}>
                <span>Target: speed-to-lead &lt;60 seconds (configurable by source and consent)</span>
                <span>Target: dedupe + database consolidation within 30 days</span>
                <span>Controls: consent + disclosure workflows, audit trail, DNC handling</span>
              </div>
              <div className={styles.ctaRow}>
                <a className={styles.primaryCTA} href="#demo">
                  See it in action
                </a>
                <a className={styles.secondaryCTA} href="/quiz">
                  Check if this fits you
                </a>
              </div>
              <p className={styles.microcopy}>Relationship-first: AI augments the agent; it never replaces the agent.</p>
            </div>

            <div className={styles.heroVisual} aria-hidden>
              <div className={styles.visualBadge}>
                <span className={styles.badgeLabel}>Speed-to-lead</span>
                <strong>&lt;60s target</strong>
              </div>
              <RadialOrbitVisualizer />
            </div>
          </div>
        </div>
      </section>

      <section id="personaSwitch" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Built for the entire buying committee.</h2>
            <p className={styles.supporting}>
              Agent outcomes vs Ops outcomes vs Compliance outcomes - clear separation to speed internal alignment.
            </p>
          </div>
          <div className={styles.tabbed}>
            <div className={styles.tabList} role="tablist" aria-label="Primary personas">
              {personaTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activePersona === tab.id}
                  className={activePersona === tab.id ? styles.activeTab : styles.tab}
                  onClick={() => setActivePersona(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.tabPanel} role="tabpanel">
              <ul>
                {activePanel.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.secondaryCTA} href="/solutions">
              View solutions by role
            </a>
          </div>
        </div>
      </section>

      <section id="problemFraming" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>The hidden cost: slow follow-up + messy data = lost pipeline.</h2>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Symptoms</p>
              <ul>
                <li>Missed callbacks when reps are in showings</li>
                <li>Inconsistent follow-up and warm leads cooling</li>
                <li>Leads slipping through cracks with no audit trail</li>
              </ul>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Root causes</p>
              <ul>
                <li>Tool sprawl with no single source of truth</li>
                <li>Manual logging + too many clicks in CRM</li>
                <li>Setup tax and daily friction destroy adoption</li>
              </ul>
              <p className={styles.supporting}>
                Why current solutions fail: complexity stalls onboarding; agents revert to texting; ops lose visibility.
              </p>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.secondaryCTA} href="#implementation">
              See the implementation plan
            </a>
          </div>
        </div>
      </section>

      <section id="solutionOverview" className={`${styles.section} ${styles.stackedCards}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>How it works (enterprise-ready).</h2>
          </div>
          <div className={styles.cardGrid}>
            {solutionCards.map((card) => (
              <article key={card.title} className={styles.card}>
                <h3 className={styles.h3}>{card.title}</h3>
                <p>{card.text}</p>
                <div className={styles.microProof}>{card.proof}</div>
              </article>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCTA} href="#demo">
              See it in action
            </a>
          </div>
        </div>
      </section>

      <section id="demo" className={`${styles.section} ${styles.splitHero}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>
              {"Live workflow demo: lead -> contact -> qualification -> booked meeting."}
            </h2>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.card}>
              <ul>
                {demoFlow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.highlightBox}>
              <p className={styles.cardTitle}>What you&apos;ll see</p>
              <p className={styles.supporting}>
                Fast proof for high-intent visitors: routing by consent, AI outreach with disclosure, calendar handoff,
                and logging built-in.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.primaryCTA} href="/book">
                  Book a call
                </a>
                <a className={styles.secondaryCTA} href="/security#request">
                  Request security packet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className={`${styles.section} ${styles.caseStudyGrid}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Proof that stands up to scrutiny.</h2>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <p className={styles.cardTitle}>Case study outline</p>
              <ul>
                <li>{"Baseline -> intervention -> result -> timeframe -> context"}</li>
                <li>How measured + attribution rules + measurement window</li>
                <li>Replicability notes for your stack</li>
              </ul>
            </article>
            <article className={styles.card}>
              <p className={styles.cardTitle}>Benchmarks</p>
              <div className={styles.metricsGrid}>
                {benchmarks.map((metric) => (
                  <div key={metric.label} className={styles.metricTile}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className={styles.card}>
              <p className={styles.cardTitle}>Testimonials</p>
              <p className={styles.supporting}>
                Specific outcome quotes tied to KPIs (speed-to-lead, appointment rate, audit readiness) with source and
                measurement window.
              </p>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.secondaryCTA} href="/case-studies">
              Read decision-grade case studies
            </a>
          </div>
        </div>
      </section>

      <section id="riskAndControls" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Controls that reduce compliance and operational risk.</h2>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.checklistCard}>
              <p className={styles.cardTitle}>Compliance controls</p>
              <ul>
                <li>Consent status required to route certain outreach types</li>
                <li>AI disclosure guidance and script governance</li>
                <li>Unsubscribe + DNC handling</li>
                <li>Audit trail on messaging/call actions</li>
              </ul>
            </div>
            <div className={styles.checklistCard}>
              <p className={styles.cardTitle}>Operational controls</p>
              <ul>
                <li>Role-based access controls (RBAC)</li>
                <li>Admin policy templates + approvals</li>
                <li>Sequence versioning + change logs</li>
                <li>Data retention + export controls</li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.secondaryCTA} href="/security">
              See security &amp; compliance
            </a>
          </div>
        </div>
      </section>

      <section id="offerStack" className={`${styles.section} ${styles.pricingPreview}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Choose your path (matched to stage).</h2>
          </div>
          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <article key={tier.name} className={styles.tierCard}>
                <div className={styles.tierHeader}>
                  <p className={styles.cardTitle}>{tier.name}</p>
                  <span className={styles.muted}>Best for {tier.bestFor}</span>
                </div>
                <ul>
                  {tier.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <a className={styles.primaryCTA} href={tier.href}>
                  {tier.cta}
                </a>
              </article>
            ))}
          </div>
          <div className={styles.riskReducers}>
            <span>Cancel anytime</span>
            <span>Security badges</span>
            <span>No spam</span>
            <span>Clear next step</span>
            <span>SLA</span>
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCTA} href="/start">
              Start trial
            </a>
          </div>
        </div>
      </section>

      <section id="objections" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>Objections answered.</h2>
          </div>
          <div className={styles.accordion}>
            {objections.map((item) => (
              <div key={item} className={styles.accordionItem}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <a className={styles.secondaryCTA} href="/contact">
              Talk to an expert
            </a>
          </div>
        </div>
      </section>

      <section id="finalCTA" className={`${styles.section} ${styles.fullWidthCTA}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.h2}>Ready to stop losing leads to slow follow-up?</h2>
              <p className={styles.supporting}>
                Clear next step. No spam. We'll map your lead sources, consent flow, and first 2 sequences.
              </p>
            </div>
            <a className={styles.primaryCTA} href="/book">
              Book a call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
