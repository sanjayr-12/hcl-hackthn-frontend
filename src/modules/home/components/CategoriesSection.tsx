import { ChevronLeft, ChevronRight, Pizza, Sandwich, Leaf, Fish, Utensils, IceCream, Wheat } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = {
  id: string
  label: string
  icon: React.ReactNode
}

const CATEGORIES: Category[] = [
  { id: 'pizza', label: 'Pizza', icon: <Pizza className="w-5 h-5" /> },
  { id: 'burger', label: 'Burger', icon: <Sandwich className="w-5 h-5" /> },
  { id: 'healthy', label: 'Healthy', icon: <Leaf className="w-5 h-5" /> },
  { id: 'sushi', label: 'Sushi', icon: <Fish className="w-5 h-5" /> },
  { id: 'pasta', label: 'Pasta', icon: <Utensils className="w-5 h-5" /> },
  { id: 'desserts', label: 'Desserts', icon: <IceCream className="w-5 h-5" /> },
  { id: 'bakery', label: 'Bakery', icon: <Wheat className="w-5 h-5" /> },
]

type CategoriesSectionProps = {
  activeCategory: string
  onCategorySelect: (categoryId: string) => void
}

export function CategoriesSection({ activeCategory, onCategorySelect }: CategoriesSectionProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-2xl font-bold text-on-surface">Browse Categories</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            className={cn(
              'flex-shrink-0 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-colors',
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-surface-container-highest text-on-surface hover:bg-surface-container-high',
            )}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  )
}
