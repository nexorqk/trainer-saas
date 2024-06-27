import * as Tabs from "@radix-ui/react-tabs";

import TrainerSignUp from "./components/TrainerSignUp";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-800">
      <h2 className="mb-6 text-5xl font-bold text-white tracking-tighter">
        Регистрация
      </h2>
      <div className="min-h-[460px]">
        <Tabs.Root
          className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2"
          defaultValue="tab1"
        >
          <Tabs.List
            className="shrink-0 flex border-b border-mauve6"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab1"
            >
              Тренер
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab2"
            >
              Ученик
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <TrainerSignUp />
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
          >
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              Зарегестрируйтесь в качестве ученика
            </p>
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
              />
            </fieldset>
            <div className="flex justify-end mt-5">
              <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                Save changes
              </button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default App;
