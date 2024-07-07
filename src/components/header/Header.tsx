import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        TrainersApp
      </Link>
      <div className={classes.buttons}>
        <Link to="auth/sign-in">
          <Button variant="outlined">Войти</Button>
        </Link>
        <Link to="auth/sign-up">
          <Button variant="contained" color="secondary">
            Регистрация
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
