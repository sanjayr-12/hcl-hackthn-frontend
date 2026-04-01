import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'
import { RestaurantNavbar } from '../components/RestaurantNavbar'
import { RestaurantHero } from '../components/RestaurantHero'
import { MenuCategorySidebar } from '../components/MenuCategorySidebar'
import { MenuSection } from '../components/MenuSection'
import { CartBar } from '../components/CartBar'
import { AddToCartToast } from '../components/AddToCartToast'
import { Footer } from '@/modules/home/components/Footer'
import { MOCK_RESTAURANT, MOCK_MENU_ITEMS, MENU_CATEGORIES } from '../mockData'
import type { MenuItem, MenuSection as MenuSectionType } from '../types'

const TOAST_DURATION_MS = 3000

export function RestaurantDetailContainer() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('popular')
  const [toastItem, setToastItem] = useState<MenuItem | null>(null)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { items: cartItems, addItem } = useCartStore()

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const totalAmount = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  // Build menu sections from mock data (replace with API data later)
  const menuSections: MenuSectionType[] = MENU_CATEGORIES.map((cat) => ({
    category: cat,
    items: MOCK_MENU_ITEMS.filter((item) => item.category === cat.id && item.isAvailable),
  })).filter((section) => section.items.length > 0)

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Scroll to section — DOM side effect belongs in the container
    const el = document.getElementById(categoryId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      restaurantId: MOCK_RESTAURANT.id,
    })

    // Show toast, auto-dismiss after TOAST_DURATION_MS
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToastItem(item)
    toastTimerRef.current = setTimeout(() => setToastItem(null), TOAST_DURATION_MS)
  }

  const handleDismissToast = () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToastItem(null)
  }

  const handleViewCart = () => navigate('/cart')

  const handleSearchSubmit = (query: string) => {
    navigate(`/restaurants?search=${encodeURIComponent(query)}`)
  }

  // Clean up toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [])

  return (
    <div className="bg-surface min-h-screen">
      <RestaurantNavbar cartCount={totalItems} onSearchSubmit={handleSearchSubmit} />

      <main className="max-w-screen-2xl mx-auto">
        <RestaurantHero restaurant={MOCK_RESTAURANT} />

        <div className="flex flex-col md:flex-row px-8 gap-12 pb-32">
          <MenuCategorySidebar
            categories={MENU_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />

          <section className="flex-grow">
            {menuSections.map((section) => (
              <MenuSection
                key={section.category.id}
                section={section}
                onAddToCart={handleAddToCart}
              />
            ))}
          </section>
        </div>
      </main>

      <Footer />

      <CartBar totalItems={totalItems} totalAmount={totalAmount} onViewCart={handleViewCart} />

      {toastItem && (
        <AddToCartToast itemName={toastItem.name} onDismiss={handleDismissToast} />
      )}
    </div>
  )
}
