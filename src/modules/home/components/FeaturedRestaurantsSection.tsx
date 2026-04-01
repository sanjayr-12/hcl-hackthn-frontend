import { ArrowRight } from 'lucide-react'
import { RestaurantCard, type RestaurantCardData } from './RestaurantCard'

// Mock data — replace with API call to GET /restaurants when backend is ready
const MOCK_RESTAURANTS: RestaurantCardData[] = [
  {
    id: 1,
    name: 'The Hearthside Pizzeria',
    cuisine: 'Authentic Italian • Wood Fired • Artisan',
    rating: 4.9,
    deliveryTime: '20-30 min',
    freeDelivery: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA_toV9Npod_oRTfiffdATQm0KTPtZmAmj3DrmjwLiaFpbAq7BB03ZqU37xLyD-GotReDfsPlAlLhwUOrEWltfvuuh2zCUzhWQzLnrPeLOQnjKaRF_jfbXsLB_WSd5tr_OkC2gofdsIsrhg6wICbAXeEimPW9tsartvDg7bpizane47Tm6fv8Ee56ayZ8K6FATo-keefeuQA0jvm7QYZr23Hyj0w_1GgH36zIRCCjZuvHJ0dqV6m86GfLWm8yUWByfXIV7e3Wfzg',
  },
  {
    id: 2,
    name: 'Sakura Omotesando',
    cuisine: 'Premium Sushi • Japanese • Fresh Catch',
    rating: 4.7,
    deliveryTime: '35-45 min',
    freeDelivery: false,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACteJAoNLFV7P4FzoKHVuob4cyRRMwnskDKWEHBR4yoRPULKwuFTiOv0PPS5Mzqoh7GvPGFJbLxe-M1V8MiiUpA-7B_oc_Y309TraZbPioXTFYqqquYaNTbG3HOjcejRW5b6RkucKY5Y6vvHQA14LJm_engXYhTDSmpVI7PjMLOZ3T8zPQDBQXamYvILCfkZJtqPdOhBA0lUgTT_PXNCFCExMNMOeil3WtiHGhauTtuDPVo8zO2mMLltQsx9HXdxhuK34-J2qltQ',
  },
  {
    id: 3,
    name: 'Iron & Grit Burger Bar',
    cuisine: 'American • Gourmet Burgers • Craft',
    rating: 4.8,
    deliveryTime: '15-25 min',
    freeDelivery: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-T7eGOs2P2zlAzz2WFnm4bxh72bkCQr3cwLafYdx5OSLtXXfMHaVWCNYxSMSUMYLVOOjXu-JbvtpqPXVzrdSZpZu0jPrLR0aBJ0gzVLZv72SntMwwDw3PYfitbeltpaScGhRvaqRb73iMXh2heqXFeitYI6k-DYeBxOqfE5LRqgtcgzulz4IZavFD4AzgJibkZalJXkwQ8_uW5UlFJ3c0PUX5HZJR-y7-cG07sBmNAzRVHim_rXTZmSK7zIeNIWcZvzYBL1Gpkw',
  },
  {
    id: 4,
    name: 'The Green Pantry',
    cuisine: 'Healthy • Vegan Friendly • Organic',
    rating: 4.6,
    deliveryTime: '25-35 min',
    freeDelivery: false,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvH9F2HaCzFISI8MdaFLW4rT8YboZs-5Gb78AioXBM4GbmfjaXLsQ1DPXUO0mhE3DPPA565oavjUGThP9_2S8JUt8REQ1Qm6VMrUMunDfc1rHHN_go3ui2eEqyTJwMzQ6VC-C7i20KLWXleeS3KyxCOTnNHkyr0iyyO_fdaemV8MiHHjK_4WYtfdTktUyvUqXUeqZwfT4Zceabj2QuMv-akMZCIFJJOj0dQPBQtwCJpuB4bhO5uTEomoAdaLv6-j16HclDvVv0MA',
  },
  {
    id: 5,
    name: 'Velvet & Crumb',
    cuisine: 'Desserts • Fine Pastry • Sweets',
    rating: 4.9,
    deliveryTime: '10-20 min',
    freeDelivery: true,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMmygSijsE4wqoAjvb5jb5r5uE7OrSSMUUicENtV-90360jzQ4yogl0VPPM_USd6Hn8G1wDIrtVOIEI2CMegj2TQ-HLvCBZ3bBOZcVgz4YSTAw3ssM92nzv537_zCSJKBX_o8hzbBH9OTdb87DgK1StfefteS2P8pFJup2Wg9UpJLq4A5kHmiKgq-jHZFsLqBrmp4YnBapFgaSFuEPR98d4BLob7q0XXVZg60IJ7VsBdIwmgd1-XUhCW3BzCBJa20onybFuSPdBA',
  },
  {
    id: 6,
    name: 'Lotus Dim Sum House',
    cuisine: 'Asian • Dumplings • Tea House',
    rating: 4.5,
    deliveryTime: '30-40 min',
    freeDelivery: false,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4l0NRWmPk2yhMdxrdbEz8QqBfJwxkF47DzXUwzEzXnQRaFWfgx_BPUZM8PHQb1v5HULvi2dOpelHg_Zqv6ZXTIoLAPAOIGsdLORhFFT5MsH18hbO3vMLlveXCxq5bzEDu8-ThHwaWFC4RfbMDVYW-u8zc4SBqDqubZbgBMiS6Zz9_0v65FtS69Vktf5mHqkUB6tpyg5yBqeS_eJFFANSqNTedAzvwt_WhLxJbjhW-uhoxQ29oCT_hcrhw1r3nCFC3ZYXUbFpb6g',
  },
]

type FeaturedRestaurantsSectionProps = {
  onRestaurantClick: (id: number) => void
  onViewAll: () => void
}

export function FeaturedRestaurantsSection({
  onRestaurantClick,
  onViewAll,
}: FeaturedRestaurantsSectionProps) {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2 block">
            Curated Selection
          </span>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
            Featured Restaurants
          </h2>
        </div>
        <button
          onClick={onViewAll}
          className="text-primary font-semibold hover:underline flex items-center gap-1 transition-opacity hover:opacity-80"
        >
          View all <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_RESTAURANTS.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={onRestaurantClick}
          />
        ))}
      </div>
    </section>
  )
}
