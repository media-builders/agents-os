import styles from "./page.module.css";
import RadialOrbitVisualizer from "../components/frontend/homepage/RadialOrbitVisualizer";

const insightTips = [
  "Positive sentiment detected",
  "Friendly conversational tone",
  "Try calling in the early afternoon",
];

const metrics = [
  { label: "Active", value: "4" },
  { label: "Call Rate", value: "52/m" },
  { label: "Lead", value: "31%" },
  { label: "Success", value: "43%" },
];

const queueLeads = ["Lead 1", "Lead 2", "Lead 3", "Lead 4"];

const sparklineHeights = [48, 62, 56, 74, 64, 80, 58];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.radarSection}>
        <div className={styles.radarHeader}>
          <p className={styles.brand}>AI DIALER</p>
          <button className={styles.priorityButton}>Dial next high priority →</button>
        </div>

        <div className={styles.radarLayout}>
          <div className={styles.radialColumn}>
            <div className={styles.tipBadge}>
              <span>Best time to call</span>
              <p>Campaign A is 10:00 AM</p>
            </div>

            <RadialOrbitVisualizer />
          </div>

          <aside className={styles.callQueue}>
            <p className={styles.queueLabel}>CALL QUEUE</p>
            <ul>
              {queueLeads.map((lead) => (
                <li key={lead}>{lead}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className={styles.searchRow}>
          <div className={styles.searchBar}>
            <span role="img" aria-label="Search">
              🔍
            </span>
            <input defaultValue="start dialing" />
          </div>
          <div className={styles.userBadge}>JD</div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.metricsRow}>
          <div className={styles.dashboardPill}>
            <span>Dashboard</span>
          </div>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
            </div>
          ))}
          <div className={styles.performanceSpark}>
            <div className={styles.performanceWave} />
          </div>
        </div>

        <div className={styles.cardsGrid}>
          <article className={styles.insightCard}>
            <div className={styles.cardHeader}>
              <h3>AI Insights</h3>
              <p>Live Calls</p>
            </div>
            <ul>
              {insightTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>

          <article className={styles.liveCallsCard}>
            <h3>Live Calls</h3>
            <div className={styles.liveTotals}>
              <div>
                <p>Active</p>
                <strong>8</strong>
              </div>
              <div>
                <p>Queued</p>
                <strong>12</strong>
              </div>
            </div>
            <div className={styles.liveNotes}>
              <span>Positive signal on next dial</span>
              <span>Lead follow-ups prioritized</span>
            </div>
          </article>

          <article className={styles.distributionCard}>
            <div className={styles.cardHeader}>
              <h3>Call Distribution</h3>
            </div>
            <div className={styles.sparkline}>
              {sparklineHeights.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <p>Even flow with AI smoothing + real-time reranks.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
