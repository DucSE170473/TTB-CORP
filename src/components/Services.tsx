import { Building2, Briefcase, DraftingCompass, Factory } from "lucide-react"

const services = [
  { title: "Tư vấn Xây dựng", desc: "Lập dự án, thẩm tra thiết kế và quản lý chi phí tối ưu.", icon: <DraftingCompass /> },
  { title: "Kết cấu Thép", desc: "Thiết kế & sản xuất khung thép tiền chế cho nhà xưởng cao cấp.", icon: <Factory /> },
  { title: "Tư vấn Kinh doanh", desc: "Giải pháp chiến lược giúp doanh nghiệp vận hành hiệu quả.", icon: <Briefcase /> },
  { title: "Thi công Trọn gói", desc: "Tổng thầu thi công từ móng đến hoàn thiện công trình.", icon: <Building2 /> },
]

export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase">Dịch vụ cốt lõi</h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-transparent hover:border-yellow-500 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}