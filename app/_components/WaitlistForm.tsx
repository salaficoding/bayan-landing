"use client"

export default function WaitlistForm() {
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
        className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none focus:ring-2 focus:ring-purple-400"
        style={{
          background: "rgba(255,255,255,0.1)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 focus:outline-none whitespace-nowrap"
        style={{ background: "var(--purple)", color: "white" }}
      >
        Join Waitlist
      </button>
    </form>
  )
}
