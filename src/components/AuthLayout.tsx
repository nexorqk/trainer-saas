import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="h-full bg-gradient-to-bl from-blue-500 to-purple-600 flex flex-col items-center justify-center">
    <Link
      className="absolute top-4 left-4 lg:top-8 lg:left-8 p-2 lg:p-4 lg:text-xl text-white hover:text-slate-300 transition-colors underline decoration-double underline-offset-4"
      to="/"
    >
      Назад
    </Link>
    <Outlet />
  </div>
);

export default AuthLayout;
