import * as Form from "@radix-ui/react-form";
import { FormEvent, useState } from "react";

const StudentSignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassowrd] = useState(true);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (passowrd !== confirmPassword) {
      setIsCorrectPassowrd(false);
    } else {
      setIsCorrectPassowrd(true);
    }

    console.log("Success");
  };

  return (
    <>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Зарегестрируйтесь в качестве ученика
      </p>
      <Form.Root onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-[260px]">
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="username"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Логин
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Пожалуйста, введите логин
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="patternMismatch"
                >
                  Введите валидный логин
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  pattern="^[a-zA-Z]{4,}$"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="password"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Пароль
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Пожалуйста, введите пароль
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  type="password"
                  value={passowrd}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="confirmPassword"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Подтвердите пароль
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Введите пароль
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </Form.Control>
            </Form.Field>
            {!isCorrectPassword && (
              <p className="text-sm text-red-600/70 mb-3">
                Пароль не совпадает
              </p>
            )}
          </div>
          <div className="w-[260px]">
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="name"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Имя
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Пожалуйста, введите имя
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="patternMismatch"
                >
                  Введите валидное имя
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  pattern="[а-яА-Я]{2,}"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="username"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Фамилия
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Пожалуйста, введите фамилию
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="patternMismatch"
                >
                  Введите валидную фамилию
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  value={surname}
                  onChange={(event) => setSurname(event.target.value)}
                  pattern="[а-яА-Я]{2,}"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field
              className="mb-[15px] w-full flex flex-col justify-start"
              name="age"
            >
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[13px] leading-none mb-2.5 text-violet12">
                  Возраст
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="valueMissing"
                >
                  Пожалуйста, введите возраст
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-violet12 opacity-[0.8]"
                  match="patternMismatch"
                >
                  Введите возраст от 3 до 140
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  pattern="^([3-9]|[1-9][0-9]|1[0-3][0-9]|140)$"
                  required
                />
              </Form.Control>
            </Form.Field>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
          >
            Зарегистрироваться
          </button>
        </div>
      </Form.Root>
    </>
  );
};

export default StudentSignUp;
