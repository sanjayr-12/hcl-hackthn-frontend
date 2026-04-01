import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to email API when backend is ready
    setEmail('')
  }

  return (
    <section className="mt-24 bg-stone-900 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      {/* Background image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfI67RjP4Wq3WOpRFQxrtHjrjEcFIwFhAnyjC-iLvN4LD9EIzG_ibMupUluO3OoLD_uPqgjnh0_k9-Inp_GsAe4_bGX2z0hs8orsfwc69Fqo9ABJ39byG2FqWp6pZbqrSJnZRkpHjTpi8PRSJpc40UmD0X1SJoQ0FDiLmp6hsH9bVCT8sg_-PBD4yh0t9lqj0SP7IKnjcStGazOmESnuqiG0eL_bIDcVksHsjS8YQ-dqkzxwkq4xGrUlAUTCtQIhX5GK-IIrU7RQ"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="flex-1 relative z-10">
        <h2 className="font-headline text-white text-4xl md:text-5xl font-bold mb-6">
          Join the Culinary Inner Circle
        </h2>
        <p className="text-stone-400 text-lg mb-8 max-w-xl">
          Get exclusive access to secret menus, curated restaurant recommendations, and 20% off
          your first three orders.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 h-14 rounded-xl bg-stone-800 border-none text-white px-6 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-stone-500"
          />
          <button
            type="submit"
            className="h-14 px-8 bg-primary text-white font-bold rounded-xl hover:bg-primary-dim transition-colors active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
