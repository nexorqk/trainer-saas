import { Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form className={classes.form} onSubmit={handleLogin}>
      <Typography gutterBottom variant="h3" textAlign="center">
        Войдите в аккаунт
      </Typography>
      <div className={classes.inputs}>
        <TextField
          autoComplete="username"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Введите логин"
          required
          id="username"
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // pattern="^[a-zA-Z]{4,}$"
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Введите пароль"
          required
          id="password"
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // match="valueMissing"
        />
        <Button variant="contained">Войти</Button>
      </div>
    </form>
  );
};

export default LoginPage;
