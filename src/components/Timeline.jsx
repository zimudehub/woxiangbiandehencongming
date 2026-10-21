import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function TimelineItem({ entry, i }) {
  return (
    <motion.li
      className="timeline-item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay: i * 0.06 }}
    >
      <div className="timeline-rail" aria-hidden="true">
        <span className="timeline-rail-fill" />
      </div>
      <motion.span
        className="timeline-year"
        initial={{ color: "#8d8981" }}
        whileInView={{ color: "#e0522d" }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.6, ease }}
      >
        {entry.year}
      </motion.span>
      <div className="timeline-main">
        <p className="timeline-role">{entry.role}</p>
        <p className="timeline-org label">{entry.org}</p>
        <p className="timeline-note">{entry.note}</p>
      </div>
    </motion.li>
  );
}

export default function Timeline({ timeline }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // 容器整体一个细竖条轨道，长度随滚动填充（视觉辅助）
  const fillH = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section className="timeline shell">
      <div className="timeline-grid">
        <div className="timeline-left">
          <p className="eyebrow">履历</p>
          <h3 className="display timeline-title">
            十年，<br />一条安静滚动的线。
          </h3>
          <p className="timeline-sub">
            从 0 到 1 搭过系统，也在亿级产品里改过 1 像素。
            偏好的事是把混乱变简单，把慢的地方变快。
          </p>
        </div>

        <div className="timeline-right" ref={ref}>
          <div className="timeline-track" aria-hidden="true">
            <motion.div
              className="timeline-track-fill"
              style={{ height: fillH }}
            />
          </div>
          <ol className="timeline-list">
            {timeline.map((t, i) => (
              <TimelineItem key={t.year} entry={t} i={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}