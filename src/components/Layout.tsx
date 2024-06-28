import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="h-full bg-gradient-to-tl from-purple-500 to-blue-600">
    <Outlet />
  </div>
);

export default Layout;
