import { MenuItemCard } from './MenuItemCard'
import type { MenuSection as MenuSectionType, MenuItem } from '../types'

type MenuSectionProps = {
  section: MenuSectionType
  onAddToCart: (item: MenuItem) => void
}

export function MenuSection({ section, onAddToCart }: MenuSectionProps) {
  return (
    <div id={section.category.id} className="mb-16">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="font-headline font-bold text-4xl text-on-surface">
          {section.category.label}
        </h2>
        {section.category.subtitle && (
          <span className="text-outline-variant font-headline text-lg">
            {section.category.subtitle}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}
