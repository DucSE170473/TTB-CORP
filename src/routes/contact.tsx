import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

// Đăng ký Route với TanStack Router
export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Trang - Tối ưu Marketing với tone màu Slate/Yellow đặc trưng của TTB-Corp */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Kết nối với <span className="text-yellow-500">TTB-Corp</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp kết cấu thép tối ưu nhất cho doanh nghiệp của bạn.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* CỘT 1: THÔNG TIN LIÊN HỆ TRỰC TIẾP */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-yellow-500 inline-block"></span>
                Thông tin trực tiếp
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-sm tracking-wider">Hotline Tư vấn</p>
                    <a href="tel:0901234567" className="text-slate-600 hover:text-yellow-600 transition font-medium">090.xxx.xxxx (24/7)</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-sm tracking-wider">Email báo giá</p>
                    <a href="mailto:contact@ttb-corp.com" className="text-slate-600 hover:text-yellow-600 transition font-medium">contact@ttb-corp.com</a>
                  </div>
                </div>

                {/* Địa chỉ */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-sm tracking-wider">Văn phòng đại diện</p>
                    <p className="text-slate-600 leading-relaxed font-medium">Số 123, Đường Thép Việt, KCN Sóng Thần, Bình Dương</p>
                  </div>
                </div>

                {/* Giờ làm việc */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase text-sm tracking-wider">Giờ làm việc</p>
                    <p className="text-slate-600 font-medium">Thứ 2 - Thứ 7: 08:00 - 17:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT 2 & 3: FORM VÀ BẢN ĐỒ */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              {/* Trang trí nhẹ nhàng cho Form */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-xl font-bold mb-6 text-slate-900">Gửi yêu cầu báo giá nhanh</h3>
              
              <form className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tight">Họ và tên</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-white" 
                    placeholder="Nguyễn Văn A" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tight">Số điện thoại</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-white" 
                    placeholder="090..." 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tight">Nội dung dự án (Diện tích, loại nhà xưởng...)</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all bg-white" 
                    placeholder="Ví dụ: Tôi cần tư vấn nhà kho kết cấu thép 2000m2 tại Long An..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="md:col-span-2 bg-yellow-500 hover:bg-slate-900 text-white font-black py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-500/20 active:scale-[0.98]"
                >
                  GỬI THÔNG TIN NGAY <Send size={18} />
                </button>
              </form>
            </div>

            {/* Google Maps - Tích hợp thực tế */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[450px] relative">
              <iframe
                title="TTB-Corp Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206639906!2d106.6912345!3d10.8555678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzIwLjAiTiAxMDbCsDQxJzI4LjQiRQ!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}