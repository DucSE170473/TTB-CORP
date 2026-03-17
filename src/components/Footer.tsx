export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <img src="/ttb-white.jpg" alt="TTB Logo" className="h-12 mb-6" />
          <p className="max-w-md">
            TTB-Corp: Đơn vị dẫn đầu trong lĩnh vực tư vấn thiết kế và thi công kết cấu thép công nghiệp. Chúng tôi cam kết chất lượng chuẩn ISO và tiến độ vượt trội.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase">Liên kết</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-yellow-500">Quy trình sản xuất</a></li>
            <li><a href="#" className="hover:text-yellow-500">Chính sách chất lượng</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase">Văn phòng</h4>
          <p className="text-sm leading-loose">
            Số 123, Đường Thép Việt, KCN Sóng Thần,<br />
            Bình Dương, Việt Nam<br />
            Hotline: 090.xxx.xxxx
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 mt-16 pt-8 text-center text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} TTB-CORP. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}