import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react"

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section - Làm tối nền để nổi bật chữ */}
      <section className="relative bg-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/20"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            LIÊN HỆ <span className="text-yellow-500">TTB-CORP</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Giải pháp thiết kế và thi công kết cấu thép hàng đầu. Chúng tôi luôn sẵn sàng hỗ trợ dự án của bạn.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card Thông tin bên trái */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h2>
              
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<Phone className="w-6 h-6" />} 
                  title="Hotline 24/7" 
                  content="090.xxx.xxxx" 
                  link="tel:090xxxxxxx"
                />
                <ContactInfoItem 
                  icon={<Mail className="w-6 h-6" />} 
                  title="Email báo giá" 
                  content="contact@ttb-corp.com" 
                  link="mailto:contact@ttb-corp.com"
                />
                <ContactInfoItem 
                  icon={<MapPin className="w-6 h-6" />} 
                  title="Địa chỉ văn phòng" 
                  content="KCN Sóng Thần, Bình Dương" 
                />
              </div>

              <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-2 text-yellow-500">
                  <ShieldCheck />
                  <span className="font-bold uppercase tracking-wider text-sm">Cam kết TTB</span>
                </div>
                <p className="text-slate-400 text-sm">Phản hồi yêu cầu báo giá trong vòng 24h làm việc.</p>
              </div>
            </div>
          </div>

          {/* Form liên hệ bên phải */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Gửi yêu cầu trực tuyến</h3>
              <p className="text-slate-500 mb-10">Vui lòng để lại thông tin, kỹ sư của chúng tôi sẽ liên hệ tư vấn ngay.</p>
              
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase">Họ và tên *</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase">Số điện thoại *</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner" placeholder="090..." />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase">Nội dung cần tư vấn</label>
                  <textarea rows={5} className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner" placeholder="Mô tả sơ bộ về diện tích, địa điểm xây dựng..."></textarea>
                </div>
                <button className="md:col-span-2 bg-yellow-500 hover:bg-slate-900 text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-yellow-500/30">
                  XÁC NHẬN GỬI YÊU CẦU <Send size={20} />
                </button>
              </form>
            </div>

            {/* Google Map Mockup */}
            <div className="rounded-3xl overflow-hidden h-80 shadow-lg border-4 border-white">
               <iframe
                src="https://www.google.com/maps/embed?pb=..." // Thay link thật của bạn vào đây
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component phụ giúp code sạch hơn
function ContactInfoItem({ icon, title, content, link }: any) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        {link ? (
          <a href={link} className="text-lg font-bold text-slate-800 hover:text-yellow-600 transition-colors">{content}</a>
        ) : (
          <p className="text-lg font-bold text-slate-800">{content}</p>
        )}
      </div>
    </div>
  )
}