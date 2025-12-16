import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.grid}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoBadge}>N</span>
          <span>Node Home</span>
        </div>
        <nav aria-label="Primary" className={styles.nav}>
          <a className={styles.navLink} href="#about">
            About
          </a>
          <span className={styles.navDivider}>•</span>
          <a className={styles.navLink} href="#start">
            Start
          </a>
        </nav>
      </header>

      <section className={styles.hero} id="about">
        <div className={styles.pill}>
          <span>Fresh Next scaffold</span>
          <span className={styles.pillAccent}>Ready to run</span>
        </div>
        <h1 className={styles.title}>Launch a clean Next.js home page in seconds.</h1>
        <p className={styles.subtext}>
          A minimal Next.js app router setup with a bold landing page. Add data sources or API routes
          when you are ready—just keep iterating in the `app` directory.
        </p>
        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#start">
            Get started
          </a>
          <a
            className={`${styles.btn} ${styles.btnSecondary}`}
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer noopener"
          >
            Node.js docs
          </a>
        </div>
      </section>

      <section className={styles.quickStart} id="start">
        <div className={`${styles.panel} ${styles.card}`}>
          <span className={styles.tag}>Quick start</span>
          <p className={styles.muted}>Run the server from your terminal:</p>
          <pre className={styles.code}>npm run dev</pre>
          <p className={styles.muted}>
            Then open <strong>http://localhost:3000</strong> to see this page.
          </p>
        </div>
        <div className={`${styles.panel} ${styles.card}`}>
          <span className={styles.tag}>What is this?</span>
          <p className={styles.muted}>
            A lightweight Next-style starter with a single landing page you can style, extend, or
            drop into any prototype.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={`${styles.panel} ${styles.feature}`}>
          <div className={styles.bullet}>1</div>
          <h3 className={styles.mutedTitle}>Lean stack</h3>
          <p className={styles.muted}>
            Just Next.js and React. Serves everything from the `app` and `public` folders—add more
            packages when you are ready.
          </p>
        </div>
        <div className={`${styles.panel} ${styles.feature}`}>
          <div className={styles.bullet}>2</div>
          <h3 className={styles.mutedTitle}>Customizable hero</h3>
          <p className={styles.muted}>
            Swap gradients, copy, or add new sections while keeping a bold, modern aesthetic.
          </p>
        </div>
        <div className={`${styles.panel} ${styles.feature}`}>
          <div className={styles.bullet}>3</div>
          <h3 className={styles.mutedTitle}>Ready to grow</h3>
          <p className={styles.muted}>
            Add API routes under <code>app/api</code>, connect Prisma, or drop in components when you
            need them.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Node Home · minimal starter</span>
        <span>Built with a Next-style layout</span>
      </footer>
    </main>
  );
}
