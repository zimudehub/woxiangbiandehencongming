import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
    >
      <div className="nav-inner shell">
        <a className="nav-brand" href="#top">
          {name}
        </a>
        <nav className="nav-links">
          <a href="#about" className="sweep">关于</a>
          <a href="#contact" className="sweep">联系</a>
        </nav>
      </div>
    </motion.header>
  );
}