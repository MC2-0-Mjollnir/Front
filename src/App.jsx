import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import ResetPassword from "./pages/Auth/ResetPassword"
import ResetConfirmation from "./pages/Auth/ResetConfirmation"
import PasswordUpdated from "./pages/Auth/PasswordUpdated"

function App() {
  return (
    <div className="bg-[url('/images/Home/background.png')] flex items-center justify-center bg-cover bg-center min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-confirmation" element={<ResetConfirmation />} />
          <Route path="password-updated" element={<PasswordUpdated />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
