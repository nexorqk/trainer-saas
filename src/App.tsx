import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth-layout/AuthLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
