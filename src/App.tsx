// src/App.tsx
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Khởi tạo router với cây route tự động từ thư mục /routes
const router = createRouter({ routeTree })

// Đăng ký kiểu cho TypeScript (giúp code không bị lỗi gợi ý)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App