import { faker } from "@faker-js/faker";
import { CarDTO } from "../../dto/dto";
import CarItem from "./CarItem";
import { useGetCarsQuery, useAddCarMutation } from "./CarSlice";

const CarList: React.FC = () => {
  const [addCar] = useAddCarMutation();

  const addNewCar = () => {
    console.log("Adding new car");
    const newCarDTO: CarDTO = {
      id: faker.string.uuid(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      value: Number(faker.number.bigInt({ min: 0, max: 20000 })),
      engine: Number(faker.number.bigInt({ min: 1000, max: 2000 })),
    };
    addCar(newCarDTO);
  };

  const { data } = useGetCarsQuery();

  return (
    <div>
      <button onClick={addNewCar}>Add Car</button>
      <h3>Car List</h3>
      <ul>
        {data &&
          data.map((car, i) => (
            <li key={car.id}>
              <CarItem
                make={car.make}
                model={car.model}
                value={car.value}
                engine={car.engine}
                id={car.id}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CarList;
