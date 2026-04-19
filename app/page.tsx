import Link from "next/link"

const features = [
  {
    arabic: "القراءة",
    label: "Reading",
    desc: "Learn to read the Arabic script from the very first lesson — fluidly and confidently.",
  },
  {
    arabic: "الاستماع",
    label: "Listening",
    desc: "Train your ear with authentic spoken Arabic from classical and modern sources.",
  },
  {
    arabic: "المفردات",
    label: "Vocabulary",
    desc: "Build a rich lexicon grounded in Quranic and classical Arabic roots.",
  },
  {
    arabic: "النحو",
    label: "Grammar",
    desc: "Understand the architecture of the language — syntax made intuitive.",
  },
]

export default function Home() {
  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid var(--sand)" }} className="flex items-center justify-between px-8 py-5 sticky top-0 z-50 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <span className="font-display font-bold text-xl tracking-tight" style={{ color: "var(--gold-dark)" }}>
          بَيَان
        </span>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Features</a>
          <a href="#philosophy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Philosophy</a>
          <a
            href="#waitlist"
            className="text-sm px-5 py-2 rounded-full font-medium transition-all hover:opacity-90"
            style={{ background: "var(--deep-teal)", color: "#faf7f2" }}
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
        {/* Background ornament */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-8rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "32rem",
            lineHeight: 1,
            fontFamily: "var(--font-amiri)",
            color: "var(--sand)",
            opacity: 0.35,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ب
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-widest mb-6"
              style={{ color: "var(--terracotta)" }}
            >
              Arabic Learning App
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ color: "var(--ink)" }}
            >
              Learn Arabic.<br />
              <span style={{ color: "var(--gold)" }}>Deeply.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 opacity-70 max-w-md">
              Bayan is a structured Arabic curriculum designed for those who want to read the Quran, study classical texts, and connect with the language at its roots.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ background: "var(--deep-teal)", color: "#faf7f2", focusRingColor: "var(--deep-teal)" }}
              >
                Get Early Access
              </a>
              <Link
                href="/alt"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border transition-all hover:opacity-70 focus:outline-none"
                style={{ borderColor: "var(--sand)", color: "var(--ink)" }}
              >
                View Alt Design →
              </Link>
            </div>
          </div>

          {/* Card */}
          <div
            className="rounded-3xl p-8 shadow-lg relative"
            style={{ background: "var(--sand-light)", border: "1px solid var(--sand)" }}
          >
            <div className="font-arabic text-right text-4xl leading-loose mb-4" style={{ color: "var(--ink)" }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <p className="text-sm opacity-60 text-right font-display italic mb-8">
              &ldquo;In the name of Allah, the Most Gracious, the Most Merciful&rdquo;
            </p>
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: "white" }}>
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-arabic font-bold" style={{ background: "var(--gold)", color: "white" }}>ب</span>
              <div className="flex-1">
                <div className="text-sm font-medium">Lesson 1: The Letter Baa</div>
                <div className="h-1.5 rounded-full mt-1.5 overflow-hidden" style={{ background: "var(--sand)" }}>
                  <div className="h-full rounded-full w-2/3" style={{ background: "var(--deep-teal)" }} />
                </div>
              </div>
              <span className="text-xs opacity-50">67%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-8" style={{ background: "var(--sand-light)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--terracotta)" }}>What you&apos;ll learn</p>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--ink)" }}>
              A complete Arabic education
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ background: "var(--background)", border: "1px solid var(--sand)" }}
              >
                <div className="font-arabic text-3xl mb-3" style={{ color: "var(--gold)" }}>{f.arabic}</div>
                <div className="font-display font-semibold text-lg mb-2">{f.label}</div>
                <p className="text-sm opacity-60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-28 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-arabic text-5xl mb-6" style={{ color: "var(--gold)" }}>اقْرَأْ</div>
          <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{ color: "var(--terracotta)" }}>Our Philosophy</p>
          <h2 className="font-display text-4xl font-bold leading-tight mb-8" style={{ color: "var(--ink)" }}>
            Arabic is not just a language —<br />it&apos;s a key.
          </h2>
          <p className="text-lg leading-relaxed opacity-70 max-w-2xl mx-auto">
            Bayan is built for Muslims and students of the Islamic tradition who want to engage with the Quran and classical scholarship directly — without relying on translations. Every lesson is designed around this goal.
          </p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-8" style={{ background: "var(--deep-teal)" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--sand-light)" }}>
            Be first to learn with Bayan
          </h2>
          <p className="text-sm mb-8 opacity-70" style={{ color: "var(--sand)" }}>
            We&apos;re launching soon. Join the waitlist for early access.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Waitlist signup form"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              aria-label="Email address"
              className="flex-1 px-5 py-3 rounded-full text-sm outline-none focus:ring-2"
              style={{ background: "rgba(255,255,255,0.1)", color: "var(--sand-light)", border: "1px solid rgba(255,255,255,0.2)", caretColor: "var(--gold)" }}
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 focus:outline-none focus:ring-2"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 flex items-center justify-between text-xs opacity-50" style={{ borderTop: "1px solid var(--sand)" }}>
        <span className="font-arabic text-base" style={{ opacity: 1, color: "var(--gold-dark)" }}>بَيَان</span>
        <span>© 2025 Bayan. All rights reserved.</span>
        <Link href="/alt" className="underline underline-offset-2 hover:opacity-100 transition-opacity">Alt Design</Link>
      </footer>
    </div>
  )
}
