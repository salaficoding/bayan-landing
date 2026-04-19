import Link from "next/link"
import WaitlistFormAlt from "../_components/WaitlistFormAlt"

const levels = [
  { letter: "أ", level: "Beginner", lessons: 12, color: "#f97316" },
  { letter: "ب", level: "Elementary", lessons: 18, color: "#eab308" },
  { letter: "ج", level: "Intermediate", lessons: 24, color: "#22c55e" },
  { letter: "د", level: "Advanced", lessons: 30, color: "#3b82f6" },
]

const stats = [
  { value: "5,000+", label: "Learners" },
  { value: "200+", label: "Lessons" },
  { value: "28", label: "Languages supported" },
  { value: "100%", label: "Free to start" },
]

export default function AltDesign() {
  return (
    <div style={{ background: "#0b0e14", color: "#f0ede8", minHeight: "100vh", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-5 sticky top-0 z-50"
        style={{ background: "rgba(11,14,20,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold"
            style={{ background: "linear-gradient(135deg, #f97316, #eab308)", fontFamily: "var(--font-amiri)" }}
          >
            ب
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>Bayan</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#levels" className="text-sm" style={{ opacity: 0.6 }}>Curriculum</a>
          <a href="#stats" className="text-sm" style={{ opacity: 0.6 }}>About</a>
          <a
            href="#waitlist"
            className="text-sm px-5 py-2.5 rounded-xl font-semibold transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f97316, #eab308)", color: "#0b0e14" }}
          >
            Start Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 pt-24 pb-20 overflow-hidden">
        {/* Grid background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vw",
            height: "40vh",
            background: "radial-gradient(ellipse, rgba(249,115,22,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Now accepting early access applications
          </div>

          <h1
            className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Arabic.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f97316, #eab308)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unlocked.
            </span>
          </h1>

          <div
            className="text-5xl md:text-7xl mb-8 leading-tight"
            style={{ fontFamily: "var(--font-amiri)", color: "rgba(240,237,232,0.3)", direction: "rtl" }}
          >
            تَعَلَّمْ • اقْرَأْ • افْهَمْ
          </div>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(240,237,232,0.6)" }}
          >
            Stop depending on translations. Bayan gives you a direct path to understanding Arabic — Quranic, classical, and modern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="px-10 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2"
              style={{ background: "linear-gradient(135deg, #f97316, #eab308)", color: "#0b0e14", boxShadow: "0 8px 30px rgba(249,115,22,0.35)" }}
            >
              Get Early Access — Free
            </a>
            <Link
              href="/"
              className="px-10 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-80 focus:outline-none"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(240,237,232,0.7)" }}
            >
              ← Classic Design
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "var(--font-playfair)", background: "linear-gradient(135deg, #f97316, #eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(240,237,232,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum levels */}
      <section id="levels" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>Curriculum</p>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Four levels, one goal
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {levels.map((l) => (
              <div
                key={l.level}
                className="rounded-2xl p-7 flex items-center gap-6 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", cursor: "default" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
                  style={{ background: `${l.color}22`, border: `1px solid ${l.color}44`, color: l.color, fontFamily: "var(--font-amiri)" }}
                >
                  {l.letter}
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">{l.level}</div>
                  <div className="text-sm" style={{ color: "rgba(240,237,232,0.5)" }}>{l.lessons} lessons</div>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-1 rounded-full"
                        style={{ background: i < Math.round((l.lessons / 30) * 5) ? l.color : "rgba(255,255,255,0.1)" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive lesson preview */}
      <section className="py-20 px-8" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>How it works</p>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>Learn by doing</h2>
          </div>
          <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(249,115,22,0.15)", color: "#f97316" }}>Lesson 1 of 12</span>
              <span className="text-xs" style={{ color: "rgba(240,237,232,0.4)" }}>Beginner</span>
            </div>
            <div
              className="text-center text-7xl py-10 mb-6"
              style={{ fontFamily: "var(--font-amiri)", color: "#f97316" }}
            >
              ب
            </div>
            <p className="text-center text-sm mb-8" style={{ color: "rgba(240,237,232,0.6)" }}>
              This is <strong style={{ color: "#f0ede8" }}>Baa (ب)</strong> — the second letter of the Arabic alphabet. It makes the &ldquo;B&rdquo; sound.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {["ب", "ت", "ن", "ي"].map((letter, i) => (
                <button
                  key={letter}
                  className="rounded-xl py-4 text-2xl font-bold transition-all hover:scale-105 focus:outline-none focus:ring-2"
                  style={{
                    background: i === 0 ? "linear-gradient(135deg, #f97316, #eab308)" : "rgba(255,255,255,0.06)",
                    color: i === 0 ? "#0b0e14" : "rgba(240,237,232,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "var(--font-amiri)",
                  }}
                  aria-label={`Select letter ${letter}`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-4xl font-black mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Start your journey
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(240,237,232,0.55)" }}>
            Join thousands waiting to learn Arabic the right way. Free forever to start.
          </p>
          <WaitlistFormAlt />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 flex items-center justify-between text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(240,237,232,0.35)" }}>
        <span style={{ fontFamily: "var(--font-amiri)", fontSize: "1rem", color: "#f97316" }}>بَيَان</span>
        <span>© 2025 Bayan.</span>
        <Link href="/" className="underline underline-offset-2 hover:opacity-100 transition-opacity">Classic Design</Link>
      </footer>
    </div>
  )
}
