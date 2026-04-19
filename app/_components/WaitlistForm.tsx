"use client"

export default function WaitlistForm({ dark = false }: { dark?: boolean }) {
  return (
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
        style={
          dark
            ? { background: "rgba(255,255,255,0.1)", color: "var(--sand-light)", border: "1px solid rgba(255,255,255,0.2)" }
            : { background: "rgba(255,255,255,0.1)", color: "var(--sand-light)", border: "1px solid rgba(255,255,255,0.2)" }
        }
      />
      <button
        type="submit"
        className="px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 focus:outline-none focus:ring-2"
        style={{ background: "var(--gold)", color: "var(--ink)" }}
      >
        Join Waitlist
      </button>
    </form>
  )
}
