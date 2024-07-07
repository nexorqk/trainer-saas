import { FormEvent, useEffect, useState } from "react";
import { specificSportArr } from "../../constants";
import SpecificSportSelect from "../SpecificSportSelect";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";

const TrainerSignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [specificSport, setSpecificSport] = useState("");
  // const [sportTypeArr, setSportTypeArr] = useState<MultiValue<string>>([]);
  const [sportTypeNumber, setSportTypeNumber] = useState(0);
  const [isSpecific, setIsSpecific] = useState(true);
  const [isSportType, setIsSportType] = useState(true);

  const createUser = useMutation(api.users.createUser);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!specificSport) {
      setIsSpecific(false);
    } else {
      setIsSpecific(true);
    }
    // if (sportTypeArr.length < 1) {
    //   setIsSportType(false);
    // } else {
    //   setIsSportType(true);
    // }

    console.log("Success");

    createUser({ username, password, sportType: specificSport });
  };

  useEffect(() => {
    specificSportArr.forEach((item, index) => {
      if (Object.keys(item)[0] === specificSport) {
        setSportTypeNumber(index);
      }
    });
  }, [specificSport]);

  return (
    <>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Зарегестрируйтесь в качестве тренера, выбрав спецификацию
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-[260px]">
            <div>
              <div className="flex items-baseline justify-between">
                Введите валидный логин
              </div>
              <input
                className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                pattern="^[a-zA-Z]{4,}$"
                required
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                Пароль Пожалуйста, введите пароль
              </div>

              <input
                className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default TrainerSignUp;
