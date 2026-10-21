import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ hero, name, latin, role, location }) {
  const ref = useRef(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 三层视差：bg 最慢，mid（中景姓名）中等，fg（底部文案）最快且淡出
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const midX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // 鼠标视差（仅桌面、非 reduced）
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mxS = useSpring(mx, { stiffness: 60, damping: 14, mass: 0.6 });
  const myS = useSpring(my, { stiffness: 60, damping: 14, mass: 0.6 });

  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  const bgMX = useTransform(mxS, [-0.5, 0.5], [-26, 26]);
  const bgMY = useTransform(myS, [-0.5, 0.5], [-16, 16]);
  const midMX = useTransform(mxS, [-0.5, 0.5], [12, -12]);
  const midMY = useTransform(myS, [-0.5, 0.5], [-6, 6]);
  const fgMX = useTransform(mxS, [-0.5, 0.5], [20, -20]);

  const line = {
    hidden: { y: "110%" },
    show: (i) => ({
      y: 0,
      transition: { duration: 1.1, ease, delay: 0.35 + i * 0.1 },
    }),
  };

  return (
    <section className="hero" ref={ref}>
      <motion.div
        className="hero-bg"
        style={{
          y: bgY,
          scale: ready ? bgScale : 1,
          x: reduced ? 0 : bgMX,
          opacity: bgOpacity,
        }}
        aria-hidden="true"
      >
        <motion.img src={hero.image} alt="" style={{ y: reduced ? 0 : bgMY }} />
      </motion.div>
      <div className="hero-scrim" />

      <motion.h1
        className="hero-name display shell"
        style={{
          y: midY,
          x: reduced ? 0 : midMX,
        }}
        initial={false}
      >
        <motion.span className="mask">
          <motion.span
            custom={0}
            variants={line}
            initial="hidden"
            animate="show"
          >
            {name}
          </motion.span>
        </motion.span>
        <motion.span className="mask hero-name-latin">
          <motion.span
            custom={1}
            variants={line}
            initial="hidden"
            animate="show"
          >
            {latin}
          </motion.span>
        </motion.span>
      </motion.h1>

      <motion.div
        className="hero-foot shell"
        style={{
          y: fgY,
          opacity: fgOpacity,
          x: reduced ? 0 : fgMX,
        }}
      >
        <motion.p
          className="label hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
        >
          {role}
        </motion.p>
        <div className="hero-foot-row">
          <motion.p
            className="hero-lede lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
          >
            {hero.lede}
          </motion.p>
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
          >
            <span>{location}</span>
            <span className="hero-dot" />
            <span className="sweep">Open to consulting</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        className="hero-scroll label"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {hero.scroll}
        <span className="hero-scroll-line" />
      </motion.a>
    </section>
  );
}