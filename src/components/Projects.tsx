export default function Projects() {
  const projects = [
    { title: "Nhà xưởng TTB-01", area: "5000m2", location: "Bình Dương", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" },
    { title: "Kho bãi Logistics", area: "12000m2", location: "Long An", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" },
    { title: "Showroom Ô tô Thép", area: "3000m2", location: "TP.HCM", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black uppercase text-slate-900">Dự án tiêu biểu</h2>
            <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
          </div>
          <button className="text-yellow-600 font-bold hover:underline">Xem tất cả →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-64">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-yellow-400 text-sm font-bold">{p.area}</span>
                  <h3 className="text-white text-xl font-bold">{p.title}</h3>
                  <p className="text-slate-300 text-sm">{p.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}