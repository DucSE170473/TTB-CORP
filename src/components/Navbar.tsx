// src/components/Navbar.tsx
import { Link } from '@tanstack/react-router'
import { Phone, ArrowRight } from "lucide-react"

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Link href="/">
          <img src="/ttb-white.jpg" alt="TTB Corp Logo" className="h-12 w-auto" />
        </Link>

        {/* Menu - Sử dụng Link của TanStack để load trang mượt hơn */}
        <nav className="hidden md:flex gap-10 text-[15px] font-semibold text-slate-700">
          <Link to="/" className="hover:text-yellow-600 transition">Trang chủ</Link>
          <Link to="/about" className="hover:text-yellow-600 transition">Về chúng tôi</Link>
          <Link to="/projects" className="hover:text-yellow-600 transition">Dự án tiêu biểu</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition">Liên hệ</Link>
        </nav>

        {/* Action Button - Điểm nhấn Marketing */}
        <div className="flex items-center gap-4">
          <a href="tel:0123456789" className="hidden lg:flex items-center gap-2 text-slate-900 font-bold">
            <Phone size={18} className="text-yellow-500" />
            0123.456.789
          </a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-yellow-500 transition-all flex items-center gap-2 group">
            Báo giá ngay
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </header>
  )
}