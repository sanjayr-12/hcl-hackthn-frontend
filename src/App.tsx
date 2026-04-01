import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '@/modules/home/HomePage'
import { LoginPage } from '@/modules/auth/LoginPage'

// ─── Routes ────────────────────────────────────────────────────
// To add a new page: import your module's page component and add
// a new { path, element } entry here. Keep one route per module.
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  // ── Future modules (add your route below) ──────────────────
  // { path: '/restaurants', element: <RestaurantsPage /> },
  // { path: '/restaurants/:id', element: <RestaurantDetailPage /> },
  // { path: '/cart', element: <CartPage /> },
  // { path: '/orders', element: <OrdersPage /> },
  // { path: '/register', element: <RegisterPage /> },
  // { path: '/admin', element: <AdminPage /> },
  // { path: '/owner', element: <OwnerPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
