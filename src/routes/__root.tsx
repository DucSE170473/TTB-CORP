import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar' // Kiểm tra kỹ import này
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-bg-base font-sans">
      <Navbar />
      <main className="pt-20"> {/* Khoảng cách để không bị Navbar đè */}
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})