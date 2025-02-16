import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
 import OTPPage from "./pages/OTPPage";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/otp" element={<OTPPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
