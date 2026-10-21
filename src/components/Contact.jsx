import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Contact({ contact }) {
  return (
    <section className="contact shell" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <p className="eyebrow">{contact.label}</p>
          <h2 className="display contact-title">{contact.title}</h2>
          <p className="lede contact-lede">{contact.lede}</p>
          <a className="contact-email" href={`mailto:${contact.email}`}>
            <span className="sweep">{contact.email}</span>
          </a>
        </div>

        <div className="contact-right">
          <p className="label">其他</p>
          <ul className="contact-links">
            {contact.links.map(([k, v]) => (
              <motion.li
                key={k}
                className="contact-link"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.35, ease }}
              >
                <span className="label">{k}</span>
                <span>{v}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="foot shell">
        <span>© {new Date().getFullYear()} {contact.email.split("@")[0]}</span>
        <span>用克制做设计</span>
      </footer>
    </section>
  );
}