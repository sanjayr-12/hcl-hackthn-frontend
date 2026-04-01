import type { RestaurantDetail, MenuItem, MenuCategory } from './types'

// Replace with GET /restaurants/{id} when backend is ready
export const MOCK_RESTAURANT: RestaurantDetail = {
  id: 1,
  name: 'The Italian Bistro',
  rating: 4.9,
  deliveryTime: '15-25 min',
  distance: '1.2 miles',
  deliveryCost: '$0 Delivery',
  heroImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDrWrEJtpMO1B46e5CKkTwDjYg0PHbq7q-fKN36tK9vfKaZeSEZE4WNq-Saq--hgGTBFxMzf4Lqw1NrhwnUzOZ45ClOnNcsP5ygw32hK8x3BFq7UhLha44DPcWamvUKrjsjhc9Jrl-7tCfj45jXgVzVVuSiHxMiJsjKCIWuCdn8Ek3pN1F6RGvTXmBoHlMhSKtlNuOx5bVZg5-1VbbwQqpJEzZR2qO-QGQcfRdCZ_4c0kAq8Fq0lE63gHTXMQ8UH5BRGKY0ORuUuA',
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'popular', label: 'Popular', subtitle: 'Most ordered items' },
  { id: 'mains', label: 'Main Courses', subtitle: null },
  { id: 'sides', label: 'Sides & Snacks', subtitle: null },
  { id: 'desserts', label: 'Desserts', subtitle: 'Sweet endings' },
  { id: 'drinks', label: 'Drinks', subtitle: null },
]

// Replace with GET /menu/restaurant/{id} when backend is ready
export const MOCK_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    description:
      'DOP San Marzano tomatoes, buffalo mozzarella, fresh organic basil, and a drizzle of extra virgin olive oil.',
    price: 18.5,
    category: 'popular',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gziI4TlXSWzFaCNg_C0jpxJx6FowO6lfvR-mEOCu9HnbFjPrM-Rkp2qv47gOfi3N3pSMEK8NiILKDXNOJrsswA4-_-oyQ5tMC5pILaIVPgvyFyiYIaPrGq5uDey5rmWKKwDj-FaUNEFaF-3WxhgoIRUaDCEa9qOiEk4Fk3XyiuVgw1l1z_T2OLy2cqGc3HkzgGui7Z66Ygo77XnvpGlzivipV6__51L9zzZErk_N7Mx30ep_V8El4qsLX6kUHFLvukoO06x6Mw',
  },
  {
    id: 2,
    name: 'Truffle Mushroom Tagliatelle',
    description:
      'Handmade ribbon pasta, wild forest mushrooms, and aromatic black truffle cream sauce.',
    price: 24.0,
    category: 'popular',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOoiZMLdkkP5wfMjOVl6CmiTyQ_wCJ2gpSOq9czRhHgG-ZhMvNlXtnGTGY9m84qUndjpCgPeFK-dlYlF_Nh3jNrs564wJjZfo8CUutc3Ej2gE9s798VzU9CExL9y-uXLfJHp-OJGxOgA-1XieKbm5-GmPlGrHqIvyaEztBq4Es7OW2peeZrA6DrtOPKCtxvVLXxGjeCo_QQKxx_CCaWA2IEFg8pX9YtFirD44Yfgy4tcF0SLo5-LaNHOgPfGanAwCzpFleTx9-RQ',
  },
  {
    id: 3,
    name: 'Burrata Heirloom Salad',
    description:
      'Creamy Pugliese burrata, heirloom tomatoes, basil oil, and aged balsamic glaze.',
    price: 16.0,
    category: 'popular',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmL5rGRnWOb-UDX9M45qzWUQkFsqRG268BWIwbqChTzqx8_0aBdV36F7IPtucsDwc4lxwx6nREcLeJrHHHJ2FEjjni6ASe2CWXJZQHNfswQf9uQE3Rz9x8DSubYCNPW7uHv0ZrsCLA523WE2h8uoBu5WP6GOxGciYHDI3Z4cxFmQ5RscdUOIFnbfRKnyMKv8B1QBmVlCr41PNeFi2VOGQmTePO7h71THGNVOzLkAp7T3-vyhYE_hyz3oNhfhWXf8KjAi_aYfnQ9A',
  },
  {
    id: 4,
    name: '12-Hour Pappardelle Bolognese',
    description:
      'Traditional slow-cooked ragu of beef and pork, soffritto, and hand-cut pasta.',
    price: 22.5,
    category: 'popular',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTWD7pyHD7OIOZY0QknfBB7aDGOleSD42uW8xPvtspLawK2pVKb5kcsaEoBk8Ff7tqX44_PgwFmg6mijtQ1OvzgK-sFX4h7AGO8sTCsO6uw991SLpKur1FVYZ3ohdoNP5SIKl5ldqvprPBCBNz4bvx3zPAJTHxAYQkUsXWj9bJUSdQm37bDCRvQ1zaQkq18lfDOhufj7XH4hzikAIB3OOUWR-iyDNK8HhRVU6Uqvh6HIEnT4fB2Dnk4_R1DXUb_oWVnw3JFISWIQ',
  },
  {
    id: 5,
    name: 'Artisan Tiramisu',
    description: 'Espresso-soaked savoiardi, whipped mascarpone, and organic cocoa powder.',
    price: 12.0,
    category: 'desserts',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDw2Qe9u1FMlc_LUKpSvTZLtQOcKy7ftFDq291x2sqAtc0W60DuG7u4dI_6Dg0X7tB-2YVvgCk-dVCk6pV0KDG1gAm1ESQkGVnEqzER4ZVjJvHIaVX5lm1QemDc15WBbgLTuGsotmA37cXgjvg--P6dnK-nqZ5eIbxBONzmoD3eUUcE2zw9S3Pu5kI1Cq4OMMokwOiyYEOQadZB0LqoigCeOo-p52UyoM8MAqDnTC29FeH3gPswbymi1Cyudbr8oW-o52_PkpgjEQ',
  },
  {
    id: 6,
    name: 'Vanilla Bean Panna Cotta',
    description: 'Silky cream pudding topped with seasonal berry compote.',
    price: 10.5,
    category: 'desserts',
    isAvailable: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1eJ7WT4SqiyyyP8VVxTqvBxThrPLNgrNTe2aBkJUbnnlC4GCvjSohzaPpEPpqcnmK_einZFcCm_LTVBFqFzPRW1_p1ndXUmrH9e8rwq4B_kC5D8zmPEA1BH5baOSCWoebEFBicKs5BF8qbSWabSMyCgSzHxHdS6cBg41reAeFp5sHsjGS8nyaT2mbOiY2pVkHxasaUj392RLMFYMzsiznS529A86Wlq8dnalHqfq-V9Ur2PhQKTCYFJDvBmv8Y0vXevOHJ_nc-g',
  },
]
