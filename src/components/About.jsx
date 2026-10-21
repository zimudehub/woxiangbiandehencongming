import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 26 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About({ about }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="about shell" id="about">
      <div className="about-grid">
        <div className="about-media">
          <Reveal>
            <div className="frame about-frame">
              <motion.img
                src={about.image}
                alt="谭谈工作照"
                style={{ y: imgY }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="facts">
              {about.facts.map(([k, v]) => (
                <div className="fact" key={k}>
                  <dt className="label">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="about-text">
          <Reveal>
            <p className="eyebrow">{about.label}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display about-title">{about.title}</h2>
          </Reveal>
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.16 + i * 0.08}>
              <p className="about-p">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.32}>
            <div className="cap-grid">
              <p className="label">在做的事</p>
              <ul className="cap-list">
                {about.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <a className="about-link" href="#contact">
              <span className="sweep">直接聊</span>
              <span className="about-arrow">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}