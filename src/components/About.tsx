export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Giới thiệu TTB-Corp
          </h2>

          <p className="text-gray-600 leading-relaxed">
            TTB-Corp là đơn vị chuyên tư vấn chiến lược kinh doanh
            và cung cấp giải pháp kết cấu thép cho các dự án công nghiệp.
            Chúng tôi mang đến công trình chất lượng cao,
            tối ưu chi phí và đảm bảo tiến độ.
          </p>

        </div>

        <div className="bg-gray-200 h-[320px] rounded-xl flex items-center justify-center">
          Company Image
        </div>

      </div>
    </section>
  )
}