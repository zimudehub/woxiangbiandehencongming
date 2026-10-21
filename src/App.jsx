import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Band from "./components/Band";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { MotionConfig } from "framer-motion";
import { profile } from "./data";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <Nav name={profile.name} />
        <main>
          <Hero
            hero={profile.hero}
            name={profile.name}
            latin={profile.latin}
            role={profile.role}
            location={profile.location}
          />
          <About about={profile.about} />
          <Band band={profile.band} />
          <Timeline timeline={profile.timeline} />
          <Contact contact={profile.contact} />
        </main>
      </div>
    </MotionConfig>
  );
}