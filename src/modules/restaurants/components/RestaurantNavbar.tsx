import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, CircleUser } from 'lucide-react'

type RestaurantNavbarProps = {
  cartCount: number
  onSearchSubmit: (query: string) => void
}

export function RestaurantNavbar({ cartCount, onSearchSubmit }: RestaurantNavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) onSearchSubmit(searchQuery.trim())
  }

  return (
    <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo + Search */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-bold italic font-headline tracking-tight text-stone-900"
          >
            Editorial Appetite
          </Link>
          <form onSubmit={handleSubmit} className="hidden md:flex items-center bg-stone-100 px-4 py-2 rounded-full gap-3 min-w-[300px]">
            <Search className="w-4 h-4 text-stone-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for recipes or restaurants"
              className="bg-transparent border-none focus:outline-none text-sm w-full text-on-surface placeholder:text-stone-400"
            />
          </form>
        </div>

        {/* Nav + Actions */}
        <nav className="flex items-center gap-6">
          <Link
            to="/restaurants"
            className="text-stone-500 hover:text-primary font-semibold border-b-2 border-primary transition-colors"
          >
            Explore
          </Link>
          <Link to="/favorites" className="text-stone-500 hover:text-primary transition-colors">
            Favorites
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <Link to="/cart" className="relative p-1 text-stone-600 hover:text-primary transition-colors active:scale-90">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="p-1 text-stone-600 hover:text-primary transition-colors active:scale-90">
              <CircleUser className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
