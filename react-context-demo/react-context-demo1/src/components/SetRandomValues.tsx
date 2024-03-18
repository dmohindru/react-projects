import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import { RandomServiceContextDispatch } from "../context/RandomServiceContext";
import { useContext } from "react";

const SetRandomValues: React.FC = () => {
  const setRandomServiceObj = useContext(RandomServiceContextDispatch);

  const dispatchSetRandomObjSet = () => {
    if (setRandomServiceObj)
      setRandomServiceObj({
        personName: faker.person.firstName("female"),
        car: faker.vehicle.vehicle(),
        randomNumber: faker.number.int(),
        color: faker.color.human(),
      });
  };

  return (
    <>
      <Button variant="contained" onClick={dispatchSetRandomObjSet}>
        Set Random Values
      </Button>
    </>
  );
};

export default SetRandomValues;
