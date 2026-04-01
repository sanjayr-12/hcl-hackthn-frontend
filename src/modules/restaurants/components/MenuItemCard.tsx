import { Plus } from 'lucide-react'
import type { MenuItem } from '../types'

type MenuItemCardProps = {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow group flex items-stretch">
      {/* Image */}
      <div className="w-1/3 overflow-hidden flex-shrink-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">{item.name}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-headline font-extrabold text-lg text-primary">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-surface-container-high p-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
