export default function About() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="page-wrap grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="island-shell p-8 text-center mt-8">
            <p className="text-4xl font-black text-lagoon">10+</p>
            <p className="text-sm font-bold uppercase tracking-widest text-sea-ink-soft">Năm kinh nghiệm</p>
          </div>
          <div className="island-shell p-8 text-center">
            <p className="text-4xl font-black text-lagoon">500+</p>
            <p className="text-sm font-bold uppercase tracking-widest text-sea-ink-soft">Dự án</p>
          </div>
        </div>
        
        <div>
          <span className="island-kicker text-lagoon">Về TTB-Corp</span>
          <h2 className="display-title text-4xl mt-4 mb-6 text-sea-ink">Uy tín khẳng định qua từng công trình</h2>
          <p className="text-sea-ink-soft mb-8 leading-loose">
            Chúng tôi không chỉ xây dựng nhà xưởng, chúng tôi xây dựng niềm tin. Với quy trình kiểm soát chất lượng khắt khe và đội ngũ kỹ sư tâm huyết, TTB-Corp tự hào là đối tác chiến lược của nhiều doanh nghiệp trong và ngoài nước.
          </p>
          <ul className="space-y-4 font-bold text-sea-ink">
            <li className="flex items-center gap-3">✓ Quy trình sản xuất chuẩn ISO</li>
            <li className="flex items-center gap-3">✓ Đảm bảo tiến độ thi công</li>
            <li className="flex items-center gap-3">✓ Chi phí cạnh tranh nhất thị trường</li>
          </ul>
        </div>
      </div>
    </section>
  )
}