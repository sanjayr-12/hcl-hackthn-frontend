import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, CircleUser } from 'lucide-react'

type NavbarProps = {
  cartCount?: number
}

export function Navbar({ cartCount = 0 }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo + Nav links */}
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-2xl font-bold italic font-headline tracking-tight text-stone-900"
          >
            Editorial Appetite
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-primary font-semibold border-b-2 border-primary hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              Restaurants
            </Link>
            <Link
              to="/offers"
              className="text-stone-500 hover:text-primary transition-colors"
            >
              Offers
            </Link>
          </div>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for your cravings..."
              className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline text-on-surface transition-all"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <CircleUser className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
