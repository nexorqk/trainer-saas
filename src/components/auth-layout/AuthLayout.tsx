import { Link, Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";
import { Button } from "@mui/material";

const AuthLayout = () => (
  <>
    <Link className={classes.backLink} to="/">
      <Button color="warning" variant="contained">
        Назад
      </Button>
    </Link>
    <div className={classes.contentWrapper}>
      <Outlet />
    </div>
  </>
);

export default AuthLayout;
