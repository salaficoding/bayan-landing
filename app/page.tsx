import Image from "next/image"
import WaitlistForm from "./_components/WaitlistForm"
import {
  IconBook2,
  IconBuildingMosque,
  IconBooks,
  IconGift,
} from "@tabler/icons-react"

const letters = [
  { ar: "ب", name: "Baa", sound: "B", hint: "The dot sits below" },
  { ar: "ت", name: "Taa", sound: "T", hint: "Two dots on top" },
  { ar: "ث", name: "Thaa", sound: "Th", hint: "Three dots above" },
  { ar: "ج", name: "Jeem", sound: "J", hint: "Dot sits below" },
]

const whys = [
  {
    icon: <IconBook2 size={24} stroke={1.5} />,
    title: "Read the Quran",
    desc: "Understand the words of Allah directly — no translation needed.",
  },
  {
    icon: <IconBuildingMosque size={24} stroke={1.5} />,
    title: "Follow the prayer",
    desc: "Know what you're reciting in Salah, every word of it.",
  },
  {
    icon: <IconBooks size={24} stroke={1.5} />,
    title: "Access classical texts",
    desc: "Open the door to centuries of Islamic scholarship.",
  },
  {
    icon: <IconGift size={24} stroke={1.5} />,
    title: "It's completely free",
    desc: "No subscription, no paywall, no catch. A gift to the ummah.",
  },
]

export default function Home() {
  return (
    <div style={{ background: "#0d0a1a", color: "#f0eeff", minHeight: "100vh", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-4 sticky top-0 z-50"
        style={{ background: "rgba(13,10,26,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(114,61,238,0.15)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image src="/logo.svg" alt="Bayan logo" fill style={{ objectFit: "contain" }} />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-playfair)", color: "#f0eeff" }}>
            Bayan
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#letters" className="text-sm hidden sm:block" style={{ color: "rgba(240,238,255,0.55)" }}>Letters</a>
          <a href="#why" className="text-sm hidden sm:block" style={{ color: "rgba(240,238,255,0.55)" }}>Why Bayan</a>
          <a
            href="#waitlist"
            className="text-sm px-5 py-2.5 rounded-xl font-bold transition-all hover:opacity-90"
            style={{ background: "var(--purple)", color: "white" }}
          >
            Start Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 pt-20 pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70vw",
            height: "50vh",
            background: "radial-gradient(ellipse, rgba(114,61,238,0.2) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(114,61,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(114,61,238,0.06) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-7">
            <div className="w-20 h-20 relative">
              <Image src="/logo.svg" alt="Bayan mascot" fill style={{ objectFit: "contain" }} />
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-7"
            style={{ background: "rgba(114,61,238,0.2)", border: "1px solid rgba(114,61,238,0.4)", color: "#a78bfa" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#a78bfa" }} />
            Free forever · No account needed to start
          </div>

          <h1
            className="text-6xl md:text-8xl font-black leading-none mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Read{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #723DEE, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arabic.
            </span>
          </h1>

          <div
            className="text-4xl md:text-6xl mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-amiri)", color: "rgba(167,139,250,0.5)", direction: "rtl" }}
          >
            اقْرَأْ بِاسْمِ رَبِّكَ
          </div>

          <p
            className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(240,238,255,0.6)" }}
          >
            Bayan teaches you to read the Arabic script from scratch — letter by letter. Built for Muslims who want to read the Quran in Arabic. Completely free.
          </p>

          <a
            href="#waitlist"
            className="inline-block px-10 py-4 rounded-xl text-base font-bold transition-all hover:scale-[1.02] focus:outline-none"
            style={{ background: "var(--purple)", color: "white", boxShadow: "0 8px 30px rgba(114,61,238,0.5)" }}
          >
            Join the Waitlist — Free
          </a>
        </div>
      </section>

      {/* Letter preview */}
      <section id="letters" className="py-20 px-8" style={{ borderTop: "1px solid rgba(114,61,238,0.1)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>What you&apos;ll learn first</p>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>
              28 letters. Infinite words.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {letters.map((l) => (
              <div
                key={l.ar}
                className="rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "rgba(114,61,238,0.08)", border: "1px solid rgba(114,61,238,0.15)" }}
              >
                <div
                  className="text-6xl mb-4 leading-none"
                  style={{ fontFamily: "var(--font-amiri)", color: "#a78bfa" }}
                >
                  {l.ar}
                </div>
                <div className="font-bold text-base mb-1">{l.name}</div>
                <div
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full inline-block mb-2"
                  style={{ background: "rgba(114,61,238,0.2)", color: "#c4b5fd" }}
                >
                  /{l.sound}/
                </div>
                <p className="text-xs" style={{ color: "rgba(240,238,255,0.45)" }}>{l.hint}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-6" style={{ color: "rgba(240,238,255,0.4)" }}>
            + 24 more letters waiting for you
          </p>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="py-20 px-8" style={{ background: "rgba(114,61,238,0.05)", borderTop: "1px solid rgba(114,61,238,0.1)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>Why learn to read?</p>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>
              Everything starts with reading
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whys.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(114,61,238,0.12)" }}
              >
                <span
                  className="flex-shrink-0 mt-0.5 rounded-xl p-2"
                  style={{ background: "rgba(114,61,238,0.18)", color: "#a78bfa" }}
                >
                  {w.icon}
                </span>
                <div>
                  <div className="font-bold mb-1">{w.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.55)" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-14 h-14 relative mx-auto mb-5">
            <Image src="/logo.svg" alt="Bayan" fill style={{ objectFit: "contain" }} />
          </div>
          <h2
            className="text-4xl font-black mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Start your reading journey
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(240,238,255,0.5)" }}>
            Join the waitlist for early access. Free, always.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-7 px-8 flex items-center justify-between text-xs"
        style={{ borderTop: "1px solid rgba(114,61,238,0.15)", color: "rgba(240,238,255,0.35)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative">
            <Image src="/logo.svg" alt="Bayan" fill style={{ objectFit: "contain" }} />
          </div>
          <span className="font-bold">Bayan</span>
        </div>
        <span>© 2025 Bayan. All rights reserved.</span>
      </footer>
    </div>
  )
}
