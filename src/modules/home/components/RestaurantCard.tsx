import { Star, Clock } from 'lucide-react'

export type RestaurantCardData = {
  id: number
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
  freeDelivery: boolean
  imageUrl: string
}

type RestaurantCardProps = {
  restaurant: RestaurantCardData
  onClick: (id: number) => void
}

export function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onClick(restaurant.id)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container-low">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {restaurant.freeDelivery && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
              Free Delivery
            </span>
          </div>
        )}
        {/* Rating badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="font-bold text-on-surface text-sm">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="text-on-surface-variant text-sm mt-1">{restaurant.cuisine}</p>
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg flex-shrink-0">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-semibold">{restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  )
}
