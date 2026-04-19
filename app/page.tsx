import Link from "next/link"
import Image from "next/image"
import WaitlistForm from "./_components/WaitlistForm"

const steps = [
  {
    arabic: "الحروف",
    step: "01",
    label: "Learn the letters",
    desc: "Start with the Arabic alphabet — shapes, sounds, and how each letter connects.",
  },
  {
    arabic: "الكلمات",
    step: "02",
    label: "Sound out words",
    desc: "Combine letters into words using vowel marks (harakat) so you can read anything.",
  },
  {
    arabic: "الجمل",
    step: "03",
    label: "Read full sentences",
    desc: "Graduate to reading real Arabic text from the Quran and classical sources.",
  },
]

export default function Home() {
  return (
    <div style={{ background: "#ffffff", color: "var(--navy)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        style={{ borderBottom: "1px solid #e8e4f5" }}
        className="flex items-center justify-between px-8 py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image src="/logo.svg" alt="Bayan logo" fill style={{ objectFit: "contain" }} />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--navy)", fontFamily: "var(--font-playfair)" }}>
            Bayan
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#how" className="text-sm opacity-60 hover:opacity-100 transition-opacity hidden sm:block">How it works</a>
          <a href="#free" className="text-sm opacity-60 hover:opacity-100 transition-opacity hidden sm:block">Free?</a>
          <a
            href="#waitlist"
            className="text-sm px-5 py-2.5 rounded-full font-semibold transition-all hover:opacity-90 focus:outline-none"
            style={{ background: "var(--purple)", color: "white" }}
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}
      >
        {/* Big Arabic background letter */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-4rem",
            top: "50%",
            transform: "translateY(-55%)",
            fontSize: "38rem",
            lineHeight: 1,
            fontFamily: "var(--font-amiri)",
            background: "linear-gradient(135deg, #723DEE15, #723DEE05)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ب
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7"
              style={{ background: "var(--purple-faint)", color: "var(--purple)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--purple)" }} />
              100% Free · No subscription needed
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--navy)" }}
            >
              Learn to read<br />
              <span style={{ color: "var(--purple)" }}>Arabic.</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--navy)", opacity: 0.65 }}
            >
              Bayan teaches you to read Arabic script — letter by letter, word by word. Perfect for beginners who want to read the Quran in its original language.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:shadow-lg focus:outline-none"
                style={{ background: "var(--purple)", color: "white", boxShadow: "0 4px 20px #723DEE40" }}
              >
                Join the Waitlist — Free
              </a>
              <Link
                href="/alt"
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-70 focus:outline-none"
                style={{ border: "1.5px solid #e8e4f5", color: "var(--navy)" }}
              >
                Alt design →
              </Link>
            </div>
          </div>

          {/* App card */}
          <div
            className="rounded-3xl p-7 shadow-xl relative overflow-hidden"
            style={{ background: "var(--purple-faint)", border: "1px solid #ddd5f9" }}
          >
            {/* card glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-3rem",
                right: "-3rem",
                width: "12rem",
                height: "12rem",
                borderRadius: "50%",
                background: "radial-gradient(circle, #723DEE30, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="font-arabic text-right text-3xl leading-loose mb-3"
              style={{ color: "var(--navy)", fontFamily: "var(--font-amiri)" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <p className="text-xs opacity-50 text-right italic mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              &ldquo;In the name of Allah, the Most Gracious, the Most Merciful&rdquo;
            </p>
            <div
              className="flex items-center gap-4 p-4 rounded-2xl mb-3"
              style={{ background: "white", boxShadow: "0 2px 12px #723DEE15" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "var(--purple)", color: "white", fontFamily: "var(--font-amiri)" }}
              >
                ب
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Lesson 1: The Letter Baa</div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "#e8e4f5" }}>
                  <div className="h-full rounded-full w-2/3" style={{ background: "var(--purple)" }} />
                </div>
              </div>
              <span className="text-xs font-bold flex-shrink-0" style={{ color: "var(--purple)" }}>67%</span>
            </div>
            <div
              className="text-xs font-medium text-center py-2 rounded-xl"
              style={{ background: "var(--purple)", color: "white" }}
            >
              ✓ Streak: 5 days
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-8" style={{ background: "var(--purple-faint)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--purple)" }}>How it works</p>
            <h2 className="text-3xl md:text-4xl font-black" style={{ fontFamily: "var(--font-playfair)", color: "var(--navy)" }}>
              From zero to reading — step by step
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "white", border: "1px solid #ddd5f9" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--purple-faint)", color: "var(--purple)" }}>
                    Step {s.step}
                  </span>
                  <span className="font-arabic text-2xl" style={{ color: "var(--purple)", fontFamily: "var(--font-amiri)" }}>{s.arabic}</span>
                </div>
                <div className="font-bold text-lg mb-2" style={{ color: "var(--navy)", fontFamily: "var(--font-playfair)" }}>{s.label}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--navy)", opacity: 0.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free section */}
      <section id="free" className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <Image src="/logo.svg" alt="Bayan mascot" fill style={{ objectFit: "contain" }} />
          </div>
          <h2
            className="text-4xl font-black leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--navy)" }}
          >
            Completely free.<br />
            <span style={{ color: "var(--purple)" }}>No catch.</span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-6 max-w-xl mx-auto"
            style={{ color: "var(--navy)", opacity: 0.65 }}
          >
            Bayan is built as a service to the Muslim community. Learning to read the Quran should not be behind a paywall. Every lesson, every letter, every exercise — free.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-9 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{ background: "var(--purple)", color: "white", boxShadow: "0 4px 20px #723DEE40" }}
          >
            Start Learning for Free
          </a>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-8" style={{ background: "var(--navy)" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "var(--font-playfair)", color: "white" }}>
            Be first to read Arabic with Bayan
          </h2>
          <p className="text-sm mb-8 opacity-60" style={{ color: "white" }}>
            Launching soon. Join the waitlist — it&apos;s free.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-7 px-8 flex items-center justify-between text-xs"
        style={{ borderTop: "1px solid #e8e4f5", color: "var(--navy)", opacity: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative">
            <Image src="/logo.svg" alt="Bayan" fill style={{ objectFit: "contain" }} />
          </div>
          <span className="font-bold" style={{ opacity: 1 }}>Bayan</span>
        </div>
        <span>© 2025 Bayan. All rights reserved.</span>
        <Link href="/alt" className="underline underline-offset-2 hover:opacity-100 transition-opacity">Alt Design</Link>
      </footer>
    </div>
  )
}
