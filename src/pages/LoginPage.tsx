import * as Form from "@radix-ui/react-form";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <Form.Root onSubmit={handleLogin} className="w-[260px]">
      <h2 className="text-white text-2xl mb-4 font-medium">
        Войдите в аккаунт
      </h2>
      <Form.Field className="grid mb-[10px]" name="username">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Логин
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Пожалуйста, введите логин
          </Form.Message>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="patternMismatch"
          >
            Введите валидный логин
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            pattern="^[a-zA-Z]{4,}$"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Пароль
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Пожалуйста, введите пароль
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Войти
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginPage;
