import * as Form from "@radix-ui/react-form";

import SpecificSportSelect from "./SpecificSportSelect";

const TrainerSignUp = () => (
  <div>
    <p className="mb-5 text-mauve11 text-[15px] leading-normal">
      Зарегестрируйтесь в качестве тренера, выбрав спецификацию
    </p>
    <form>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="username"
        >
          Имя
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="username"
          placeholder="Имя пользователя"
          required
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="password"
          type="password"
          placeholder="Введите пароль"
          required
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="confirmPassword"
        >
          Пароль
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="confirmPassword"
          type="password"
          placeholder="Подтвердите пароль"
          required
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <SpecificSportSelect />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
);
export default TrainerSignUp;
