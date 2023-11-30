import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Main from "./pages/main/Main"
import Staff from "./pages/staff/Staff"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="staff" element={<Staff />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
