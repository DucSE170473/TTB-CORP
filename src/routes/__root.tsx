import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles.css' // BUỘC PHẢI IMPORT CSS Ở ĐÂY

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 để không bị Navbar đè */}
        <Outlet />
      </main>
      <Footer />
    </>
  ),
})