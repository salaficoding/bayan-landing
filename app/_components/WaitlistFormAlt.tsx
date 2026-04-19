"use client"

export default function WaitlistFormAlt() {
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
        className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none focus:ring-2"
        style={{
          background: "rgba(255,255,255,0.07)",
          color: "#f0ede8",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 whitespace-nowrap"
        style={{ background: "var(--purple)", color: "white" }}
      >
        Get Early Access
      </button>
    </form>
  )
}
