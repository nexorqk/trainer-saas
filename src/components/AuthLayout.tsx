import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="min-h-[900px] h-full bg-gradient-to-bl from-blue-500 to-purple-600 flex flex-col">
    <Link
      className="p-4 lg:p-8 lg:text-xl text-white underline decoration-double underline-offset-4"
      to="/"
    >
      Назад
    </Link>
    <div className="flex flex-col items-center p-2 lg:p-8">
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;
