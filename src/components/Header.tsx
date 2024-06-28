import { Link } from "react-router-dom";
// import LogoSvg from "../assets/logo.svg";

const Header = () => (
  <header className="container mx-auto px-4 h-20 flex justify-between items-center">
    <Link className="text-white text-2xl font-bold" to="/">
      {/* <img src={LogoSvg} alt="Logo" width={30} height={30} /> */}
      TrainersApp
    </Link>
    <div className="text-white">
      <Link
        className="p-2 lg:p-4 hover:text-slate-300 transition-colors"
        to="/auth/sign-in"
      >
        Войти
      </Link>
      <Link
        className="p-2 lg:p-4 hover:text-slate-300 transition-colors"
        to="/auth/sign-up"
      >
        Регистрация
      </Link>
    </div>
  </header>
);

export default Header;
