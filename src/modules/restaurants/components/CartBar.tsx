import { ShoppingBasket, ArrowRight } from 'lucide-react'

type CartBarProps = {
  totalItems: number
  totalAmount: number
  onViewCart: () => void
}

export function CartBar({ totalItems, totalAmount, onViewCart }: CartBarProps) {
  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg">
      <button
        onClick={onViewCart}
        className="w-full bg-on-surface text-white py-4 px-8 rounded-full editorial-shadow flex items-center justify-between group hover:scale-[1.02] transition-transform active:scale-[0.98]"
      >
        {/* Left: icon + label */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingBasket className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-headline font-bold text-lg leading-none">View Cart</span>
            <span className="text-[10px] text-white/60 tracking-wider font-label uppercase mt-0.5">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
            </span>
          </div>
        </div>

        {/* Right: price + arrow */}
        <div className="flex items-center gap-4">
          <span className="font-headline font-bold text-xl">${totalAmount.toFixed(2)}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  )
}
