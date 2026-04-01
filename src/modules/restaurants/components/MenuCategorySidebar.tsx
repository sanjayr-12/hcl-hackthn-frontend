import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { MenuCategory } from '../types'

type MenuCategorySidebarProps = {
  categories: MenuCategory[]
  activeCategory: string
  onCategoryClick: (categoryId: string) => void
}

export function MenuCategorySidebar({
  categories,
  activeCategory,
  onCategoryClick,
}: MenuCategorySidebarProps) {
  return (
    <aside className="md:w-64 flex-shrink-0">
      <nav className="sticky top-28 flex flex-col gap-2">
        <span className="text-[10px] font-bold text-outline tracking-[0.2em] uppercase mb-4 px-4">
          Menu Categories
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={cn(
                'flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition-all',
                isActive
                  ? 'bg-primary text-white'
                  : 'text-secondary-muted hover:bg-surface-container-high',
              )}
            >
              <span>{cat.label}</span>
              {isActive && <TrendingUp className="w-4 h-4" />}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
