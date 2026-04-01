import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { FeaturedRestaurantsSection } from '../components/FeaturedRestaurantsSection'
import { NewsletterSection } from '../components/NewsletterSection'
import { Footer } from '../components/Footer'
import { ShoppingBasket } from 'lucide-react'

export function HomeContainer() {
  const [address, setAddress] = useState('')
  const [activeCategory, setActiveCategory] = useState('pizza')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const navigate = useNavigate()

  // TODO: replace with Zustand cart store count when cart module is built
  const cartCount = 0

  const handleFindFood = () => {
    navigate(`/restaurants${address ? `?location=${encodeURIComponent(address)}` : ''}`)
  }

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId)
    navigate(`/restaurants?category=${categoryId}`)
  }

  const handleRestaurantClick = (id: number) => {
    navigate(`/restaurants/${id}`)
  }

  const handleViewAll = () => {
    navigate('/restaurants')
  }

  const handleSearchSubmit = (query: string) => {
    navigate(`/restaurants?search=${encodeURIComponent(query)}`)
  }

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to POST /email/send-registration when backend is ready
    setNewsletterEmail('')
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar cartCount={cartCount} onSearchSubmit={handleSearchSubmit} />

      <main className="max-w-screen-2xl mx-auto px-8 pb-20">
        <HeroSection
          addressValue={address}
          onAddressChange={setAddress}
          onFindFood={handleFindFood}
        />

        <CategoriesSection
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
        />

        <FeaturedRestaurantsSection
          onRestaurantClick={handleRestaurantClick}
          onViewAll={handleViewAll}
        />

        <NewsletterSection
          emailValue={newsletterEmail}
          onEmailChange={setNewsletterEmail}
          onSubscribe={handleNewsletterSubscribe}
        />
      </main>

      <Footer />

      {/* Floating cart button */}
      <button
        onClick={() => navigate('/cart')}
        className="fixed bottom-8 right-8 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform z-40"
      >
        <ShoppingBasket className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-on-surface text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full border-4 border-background font-bold">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  )
}
