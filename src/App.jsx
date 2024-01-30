import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./services/init"
import "./App.css"
import Main from "./pages/main/Main"
import Staff from "./pages/staff/Staff"
import Services from "./pages/services/Services"
import Prices from "./pages/price/Prices"
import Works from "./pages/works/Works"
import Contacts from "./pages/contacts/Contacts"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="staff" element={<Staff />} />
          <Route path="services" element={<Services />} />
          <Route path="prices" element={<Prices />} />
          <Route path="works" element={<Works />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
