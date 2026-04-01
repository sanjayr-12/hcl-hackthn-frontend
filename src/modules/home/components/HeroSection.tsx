import { MapPin } from 'lucide-react'

type HeroSectionProps = {
  addressValue: string
  onAddressChange: (value: string) => void
  onFindFood: () => void
}

export function HeroSection({ addressValue, onAddressChange, onFindFood }: HeroSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFindFood()
  }

  return (
    <section className="mt-8 rounded-3xl overflow-hidden hero-gradient relative min-h-[440px] flex items-center">
      {/* Background food image overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwfA9XRRGwFolSM-Yfhi4yYp2UG9rTrlI8kKreiljuIjcORQPV6hlDpwVvikwv1Tab3I_9NskUBIgTC7a10yoB004_mY0nYo9y1uicJBFMopMa2Wf6niJhK39xOPthg-LIGYM6bdVEqsaOmkuS6TLTB2nZJAR2Q1ANCyDC1MscIkkqCnBXWNaLzcDc0AaunxFHAmO4v4VTbeKrIX1vqVwwMHpP68H1hnA-wihygJoOfp2M3oX9UiZBJHeFAfICFZ8e32530VUVTQ"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-12 md:px-20 w-full max-w-3xl">
        <h1 className="font-headline text-white text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          Hungry? Order from the best restaurants nearby.
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input
              type="text"
              value={addressValue}
              onChange={(e) => onAddressChange(e.target.value)}
              placeholder="Enter your delivery address"
              className="w-full h-16 pl-16 pr-6 rounded-2xl border-none text-on-surface font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="h-16 px-10 bg-on-surface text-white rounded-2xl font-bold hover:bg-stone-800 transition-all active:scale-95 shadow-xl"
          >
            Find Food
          </button>
        </form>
      </div>
    </section>
  )
}
