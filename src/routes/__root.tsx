// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      {/* Căn lề trên để không bị Navbar sticky đè lên nội dung */}
      <main className="flex-grow pt-20"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})