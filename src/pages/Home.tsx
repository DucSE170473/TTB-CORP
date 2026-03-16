import { Building2, Factory, ShieldCheck, Users, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            TTB-CORP
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tư vấn chiến lược kinh doanh – Thiết kế và thi công kết cấu thép
            cho nhà xưởng công nghiệp, mang lại giải pháp tối ưu và bền vững
            cho doanh nghiệp.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Xem hồ sơ năng lực
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Giới thiệu TTB-Corp
            </h2>

            <p className="text-gray-600 leading-relaxed">
              TTB-Corp là đơn vị chuyên tư vấn chiến lược kinh doanh và
              cung cấp giải pháp kết cấu thép cho các dự án công nghiệp.
              Với đội ngũ kỹ sư và chuyên gia nhiều năm kinh nghiệm,
              chúng tôi mang đến những công trình chất lượng cao,
              tối ưu chi phí và đảm bảo tiến độ.
            </p>
          </div>

          <div className="bg-gray-200 h-[300px] rounded-xl flex items-center justify-center">
            Image Company
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Dịch vụ của chúng tôi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow p-6 space-y-4 hover:shadow-lg transition">
              <Building2 size={40} />
              <h3 className="font-semibold text-xl">
                Tư vấn chiến lược kinh doanh
              </h3>
              <p className="text-gray-600">
                Phân tích thị trường, chiến lược phát triển và tối ưu
                mô hình vận hành cho doanh nghiệp.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 space-y-4 hover:shadow-lg transition">
              <Factory size={40} />
              <h3 className="font-semibold text-xl">
                Thiết kế kết cấu thép
              </h3>
              <p className="text-gray-600">
                Thiết kế hệ kết cấu thép cho nhà xưởng và công trình
                công nghiệp theo tiêu chuẩn kỹ thuật cao.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 space-y-4 hover:shadow-lg transition">
              <ShieldCheck size={40} />
              <h3 className="font-semibold text-xl">
                Thi công & quản lý dự án
              </h3>
              <p className="text-gray-600">
                Triển khai thi công chuyên nghiệp, đảm bảo tiến độ,
                chất lượng và an toàn công trình.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Năng lực cốt lõi
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">
              <Users className="mx-auto" size={36} />
              <h3 className="font-semibold">Đội ngũ chuyên gia</h3>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">
              <Briefcase className="mx-auto" size={36} />
              <h3 className="font-semibold">Kinh nghiệm dự án</h3>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">
              <Factory className="mx-auto" size={36} />
              <h3 className="font-semibold">Giải pháp công nghiệp</h3>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">
              <ShieldCheck className="mx-auto" size={36} />
              <h3 className="font-semibold">Chất lượng & an toàn</h3>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Dự án tiêu biểu
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-200 h-[220px] rounded-xl"></div>
            <div className="bg-gray-200 h-[220px] rounded-xl"></div>
            <div className="bg-gray-200 h-[220px] rounded-xl"></div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Hợp tác cùng TTB-Corp
          </h2>

          <p className="text-gray-300">
            Liên hệ ngay để được tư vấn giải pháp kết cấu thép và
            chiến lược phát triển doanh nghiệp.
          </p>

          <button className="bg-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Liên hệ ngay
          </button>

        </div>
      </section>

    </div>
  )
}