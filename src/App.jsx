import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/plan" element={<HomePage />} /> */}
    </Routes>
  )
}

export default App
