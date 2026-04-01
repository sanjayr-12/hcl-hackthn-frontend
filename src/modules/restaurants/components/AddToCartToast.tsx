import { Check, X } from 'lucide-react'

type AddToCartToastProps = {
  itemName: string
  onDismiss: () => void
}

export function AddToCartToast({ itemName, onDismiss }: AddToCartToastProps) {
  return (
    <div className="fixed bottom-24 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl editorial-shadow flex items-center gap-4 border border-outline-variant/10">
        {/* Check icon */}
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" />
        </div>

        {/* Message */}
        <div>
          <p className="font-bold text-sm">Item added to cart!</p>
          <p className="text-xs opacity-70 mt-0.5">{itemName}</p>
        </div>

        {/* Dismiss */}
        <button
          onClick={onDismiss}
          className="ml-4 opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
