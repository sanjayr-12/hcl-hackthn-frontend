import { Clock, MapPin, Bike, Star } from 'lucide-react'
import type { RestaurantDetail } from '../types'

type RestaurantHeroProps = {
  restaurant: RestaurantDetail
}

export function RestaurantHero({ restaurant }: RestaurantHeroProps) {
  return (
    <section className="relative h-[450px] overflow-hidden mb-12">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurant.heroImageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-12 pb-16">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full mb-4 self-start">
          <Star className="w-3 h-3 text-white fill-white" />
          <span className="text-xs font-bold text-white tracking-widest uppercase">
            {restaurant.rating} Top Rated
          </span>
        </div>

        {/* Restaurant name */}
        <h1 className="text-white font-headline font-extrabold text-7xl md:text-8xl tracking-tighter mb-4 -ml-1">
          {restaurant.name}
        </h1>

        {/* Meta info */}
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-container" />
            <span className="text-lg font-medium">{restaurant.deliveryTime}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary-container" />
            <span className="text-lg font-medium">{restaurant.distance}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="flex items-center gap-2">
            <Bike className="w-5 h-5 text-primary-container" />
            <span className="text-lg font-medium">{restaurant.deliveryCost}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
