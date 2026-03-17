import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  ),
  notFoundComponent: () => (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 - Không tìm thấy trang</h1>
      <p className="mt-4 text-slate-600">Trang bạn đang tìm kiếm cho TTB-Corp không tồn tại.</p>
      <Link to="/" className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg">Quay lại Trang chủ</Link>
    </div>
  ),
})