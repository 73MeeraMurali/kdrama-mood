import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DramaDetails from "./pages/DramaDetails"
import MyList from "./pages/MyList"
import Browse from "./pages/Browse"
import AddDrama from "./pages/AddDrama"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drama/:id" element={<DramaDetails />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/add-drama" element={<AddDrama />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App