import { createFileRoute } from '@tanstack/react-router'
import About from '../components/About' // Import component UI từ thư mục components

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="py-12">
       <About />
    </div>
  ),
})