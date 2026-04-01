export type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  category: string
  imageUrl: string
  isAvailable: boolean
}

export type MenuCategory = {
  id: string
  label: string
  subtitle: string | null
}

export type RestaurantDetail = {
  id: number
  name: string
  rating: number
  deliveryTime: string
  distance: string
  deliveryCost: string
  heroImageUrl: string
}

export type MenuSection = {
  category: MenuCategory
  items: MenuItem[]
}
