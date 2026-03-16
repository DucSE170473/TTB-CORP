import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App