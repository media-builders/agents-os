import { Fragment } from "react";
import styles from "../../../app/page.module.css";

const orbitRings = [
  { radius: 170, duration: 28 },
  { radius: 240, duration: 32 },
  { radius: 320, duration: 36 },
];

const orbitNodes = [
  {
    id: "campaignA",
    label: "Campaign A",
    orbitRadius: 170,
    angle: 35,
    labelOffset: { x: 14, y: -12 },
    state: "active",
  },
  {
    id: "campaignB",
    label: "Campaign B",
    orbitRadius: 240,
    angle: 190,
    labelOffset: { x: -88, y: -10 },
    state: "idle",
  },
  {
    id: "campaignC",
    label: "Campaign C",
    orbitRadius: 320,
    angle: 245,
    labelOffset: { x: -86, y: 18 },
    state: "idle",
  },
];

const toRadians = (angle) => (angle * Math.PI) / 180;

const RadialOrbitVisualizer = () => (
  <div className={styles.radialVisualizer}>
    {orbitRings.map((ring) => (
      <span
        key={ring.radius}
        className={styles.orbitRing}
        style={{
          width: `${ring.radius * 2}px`,
          height: `${ring.radius * 2}px`,
          animationDuration: `${ring.duration}s`,
        }}
      />
    ))}

    <div className={styles.coreSphere}>
      <div className={styles.logoIcon}>
        <img src="/favicon-darkmode.svg" alt="AgentsOS dark-mode logo" />
      </div>
    </div>

    <div className={styles.orbitNodesWrapper}>
      {orbitNodes.map((node) => {
        const radians = toRadians(node.angle);
        const x = Math.cos(radians) * node.orbitRadius;
        const y = Math.sin(radians) * node.orbitRadius;
        const stateClass =
          node.state === "active"
            ? styles.nodeActive
            : node.state === "highPriority"
            ? styles.nodeHighPriority
            : styles.nodeIdle;

        return (
          <Fragment key={node.id}>
            <div
              className={`${styles.orbitDotContainer} ${stateClass}`}
              style={{
                "--orbit-radius": `${node.orbitRadius}px`,
                "--start-angle": `${node.angle}deg`,
                "--orbit-duration": `${32 + node.orbitRadius / 10}s`,
              }}
            >
              <span className={styles.nodeDot} />
            </div>

            <span
              className={`${styles.nodeLabel} ${stateClass}`}
              style={{
                top: `calc(50% + ${y}px + ${node.labelOffset.y}px)`,
                left: `calc(50% + ${x}px + ${node.labelOffset.x}px)`,
              }}
            >
              {node.label}
            </span>
          </Fragment>
        );
      })}
    </div>

    <button className={styles.startButton}>START</button>
  </div>
);

export default RadialOrbitVisualizer;
