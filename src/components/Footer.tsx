import { Link } from '@tanstack/react-router'
import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link to={to} className="group flex items-center gap-1 text-slate-500 hover:text-yellow-600 transition-all duration-300">
    <ArrowUpRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
    <span className="font-semibold text-sm">{children}</span>
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <img src="/ttb-white.jpg" alt="TTB Logo" className="h-12 brightness-0 invert" />
            <p className="text-slate-400 leading-relaxed max-w-sm">
              <span className="font-bold text-white">TTB-Corp</span> - Tiên phong giải pháp kết cấu thép thông minh.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Khám phá</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/about">Về chúng tôi</FooterLink></li>
              <li><FooterLink to="/projects">Dự án tiêu biểu</FooterLink></li>
              <li><FooterLink to="/contact">Liên hệ tư vấn</FooterLink></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Trụ sở chính</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin className="text-yellow-500 shrink-0" size={18} />
                <span>Số 123, Đường Thép Việt, KCN Sóng Thần, Bình Dương</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-500 tracking-widest">
          © {new Date().getFullYear()} TTB-CORP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}