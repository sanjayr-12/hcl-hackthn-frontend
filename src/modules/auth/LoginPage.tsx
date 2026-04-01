import { Link } from 'react-router-dom'
import { LoginContainer } from './containers/LoginContainer'

export function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand / food art */}
      <div className="hidden lg:flex lg:w-1/2 hero-gradient flex-col justify-between p-16 relative overflow-hidden">
        {/* Subtle food image overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwfA9XRRGwFolSM-Yfhi4yYp2UG9rTrlI8kKreiljuIjcORQPV6hlDpwVvikwv1Tab3I_9NskUBIgTC7a10yoB004_mY0nYo9y1uicJBFMopMa2Wf6niJhK39xOPthg-LIGYM6bdVEqsaOmkuS6TLTB2nZJAR2Q1ANCyDC1MscIkkqCnBXWNaLzcDc0AaunxFHAmO4v4VTbeKrIX1vqVwwMHpP68H1hnA-wihygJoOfp2M3oX9UiZBJHeFAfICFZ8e32530VUVTQ"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 text-2xl font-bold italic font-headline tracking-tight text-white"
        >
          Editorial Appetite
        </Link>

        {/* Hero text */}
        <div className="relative z-10">
          <h2 className="font-headline text-5xl font-bold text-white leading-tight mb-4">
            The finest food, delivered to your door.
          </h2>
          <p className="text-white/70 text-lg">
            Curated restaurants. Seamless ordering. Every meal a moment.
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-16 bg-surface-container-lowest">
        {/* Mobile logo */}
        <Link
          to="/"
          className="lg:hidden text-2xl font-bold italic font-headline tracking-tight text-on-surface mb-12"
        >
          Editorial Appetite
        </Link>

        <LoginContainer />
      </div>
    </div>
  )
}
