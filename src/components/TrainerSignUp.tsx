import * as Form from "@radix-ui/react-form";
import { FormEvent, useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { specificSportArr } from "../constants";
import SpecificSportSelect from "./SpecificSportSelect";

const TrainerSignUp = () => {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassowrd] = useState(true);
  const [specificSport, setSpecificSport] = useState("");
  const [sportTypeArr, setSportTypeArr] = useState<MultiValue<string>>([]);
  const [sportTypeNumber, setSportTypeNumber] = useState(0);
  const [isSpecific, setIsSpecific] = useState(true);
  const [isSportType, setIsSportType] = useState(true);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      passowrd !== confirmPassword ||
      !specificSport ||
      sportTypeArr.length < 1
    ) {
      if (!specificSport) {
        setIsSpecific(false);
      } else {
        setIsSpecific(true);
      }
      if (passowrd !== confirmPassword) {
        setIsCorrectPassowrd(false);
      } else {
        setIsCorrectPassowrd(true);
      }
      if (sportTypeArr.length < 1) {
        setIsSportType(false);
      } else {
        setIsSportType(true);
      }

      return;
    }

    console.log("Success");
  };

  useEffect(() => {
    specificSportArr.forEach((item, index) => {
      if (Object.keys(item)[0] === specificSport) {
        setSportTypeNumber(index);
      }
    });
  }, [specificSport]);

  return (
    <div>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Зарегестрируйтесь в качестве тренера, выбрав спецификацию
      </p>
      <Form.Root onSubmit={handleSubmit} className="w-[260px]">
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
          <p className="text-sm text-red-600/70 mb-3">Пароль не совпадает</p>
        )}
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          {!isSpecific && (
            <p className="ml-auto text-[13px] text-violet12 opacity-[0.8] mb-2.5">
              Пожалуйста, выберите спецификацию
            </p>
          )}
          <SpecificSportSelect
            specificSport={specificSport}
            setSpecificSport={setSpecificSport}
          />
        </fieldset>
        <fieldset>
          {!isSportType && (
            <p className="ml-auto text-[13px] text-violet12 opacity-[0.8] mb-2.5">
              Пожалуйста, выберите специфику
            </p>
          )}
          <Select
            placeholder="Выберите специфику"
            noOptionsMessage={() => <span>Нет опций</span>}
            value={sportTypeArr}
            onChange={(event) => setSportTypeArr(event)}
            isMulti
            name="sportTypes"
            // @ts-ignore
            options={
              !specificSport
                ? []
                : specificSportArr[sportTypeNumber][specificSport]
            }
            closeMenuOnSelect={false}
          />
        </fieldset>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
          >
            Зарегистрироваться
          </button>
        </div>
      </Form.Root>
    </div>
  );
};
export default TrainerSignUp;
