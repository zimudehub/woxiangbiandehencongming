import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BandLine({ text, motionValue }) {
  const y = useTransform(motionValue, (v) => 70 * (1 - v));
  return (
    <div className="band-line mask">
      <motion.div
        className="display band-line-text"
        style={{ y, opacity: motionValue }}
      >
        {text}
      </motion.div>
    </div>
  );
}

// sticky-pin 段落：外层比视口高，内部内容用 position: sticky 钉住，
// 由滚动进度逐行揭示文字与背景缩放，营造「翻阅长卷」的视差。
export default function Band({ band }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.22]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
  const overlay = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.45, 0.22, 0.55]
  );

  const l = [
    useTransform(scrollYProgress, [0.1, 0.32], [0, 1]),
    useTransform(scrollYProgress, [0.22, 0.48], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.65], [0, 1]),
    useTransform(scrollYProgress, [0.55, 0.8], [0, 1]),
  ];
  const caption = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);

  return (
    <section className="band-pin" ref={ref}>
      <div className="band-pin-inner">
        <motion.div className="band-bg" style={{ y: bgY }}>
          <motion.img
            src={band.image}
            alt=""
            style={{ scale: bgScale, willChange: "transform" }}
          />
        </motion.div>
        <motion.div
          className="band-overlay"
          style={{ backgroundColor: `rgba(11,11,12,${overlay})` }}
        />

        <div className="band-content shell">
          {band.lines.map((text, i) => (
            <BandLine key={i} text={text} motionValue={l[i]} />
          ))}
          <motion.div className="band-caption" style={{ opacity: caption }}>
            <span className="label">{band.caption}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}