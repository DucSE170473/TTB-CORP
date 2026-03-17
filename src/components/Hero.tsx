import { ArrowRight, ShieldCheck, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
      {/* Background mờ ảo tạo chiều sâu */}
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80" alt="Steel Structure" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Chuyên gia Kết cấu thép & Tư vấn doanh nghiệp</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 leading-tight">
            NÂNG TẦM CÔNG TRÌNH <br /> 
            <span className="text-yellow-500">BỀN VỮNG VỚI THỜI GIAN</span>
          </h1>
          <p className="text-slate-300 mt-6 text-lg max-w-lg">
            TTB-Corp cung cấp giải pháp trọn gói từ tư vấn thiết kế đến thi công nhà xưởng, kết cấu thép tiền chế tiêu chuẩn quốc tế.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all">
              Khám phá dự án <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-6 ml-4">
               <div className="text-white border-l border-slate-700 pl-6">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-slate-400 text-sm">Năm kinh nghiệm</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}