import { Button, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { MultipleSelect } from "../SpecificSportSelect";
import classes from "./StudentSignUp.module.css";

const StudentSignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Success Sign Up");
  };

  return (
    <>
      <Typography gutterBottom variant="h3">
        Зарегестрируйтесь в качестве ученика
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Введите логин"
          required
          id="username"
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="name"
          placeholder="Введите имя"
          label="Имя"
          // pattern="[а-яА-Я]{2,}"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="surname"
          placeholder="Введите фамилию"
          label="Фамилия"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <MultipleSelect />
        <TextField
          id="age"
          placeholder="Введите возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          // Введите возраст от 3 до 140
          // pattern="^([3-9]|[1-9][0-9]|1[0-3][0-9]|140)$"
        />
        <Button type="submit" variant="contained">
          Зарегистрироваться
        </Button>
      </form>
    </>
  );
};

export default StudentSignUp;
