import { ReactNode, createContext, useState } from "react";
import { RandomService } from "../service/RandomService";
import { faker } from "@faker-js/faker";

const RandomServiceContext = createContext<RandomService | undefined>(
  undefined
);
const RandomServiceContextDispatch = createContext<
  React.Dispatch<React.SetStateAction<RandomService>> | undefined
>(undefined);

interface RandomServiceProviderProps {
  children: ReactNode;
}

const RandomServiceProvider: React.FC<RandomServiceProviderProps> = ({
  children,
}) => {
  const [randomServiceObj, setRandomServiceObj] = useState<RandomService>({
    personName: faker.person.firstName("female"),
    car: faker.vehicle.vehicle(),
    randomNumber: faker.number.int(),
    color: faker.color.human(),
  });

  return (
    <RandomServiceContext.Provider value={randomServiceObj}>
      <RandomServiceContextDispatch.Provider value={setRandomServiceObj}>
        {children}
      </RandomServiceContextDispatch.Provider>
    </RandomServiceContext.Provider>
  );
};

export default RandomServiceProvider;
export { RandomServiceContext, RandomServiceContextDispatch };
