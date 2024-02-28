import { BikeDTO } from "../../dto/dto";
import BikeItem from "./BikeItem";
import { useAddBikeMutation, useGetBikesQuery } from "./BikeSlice";
import { faker } from "@faker-js/faker";

const BikeList: React.FC = () => {
  const { data } = useGetBikesQuery();
  const [addBike] = useAddBikeMutation();

  const addNewBike = () => {
    const newBike: BikeDTO = {
      id: faker.string.uuid(),
      model: faker.vehicle.bicycle(),
      make: faker.vehicle.manufacturer(),
      tyre: "26X1.5",
      value: Number(faker.number.bigInt({ min: 10, max: 50 })),
    };

    addBike(newBike);
  };

  return (
    <div>
      <button onClick={addNewBike}>Add Bike</button>
      <h3>Bike List</h3>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={item.id}>
              <BikeItem
                key={i}
                make={item.make}
                model={item.model}
                value={item.value}
                tyre={item.tyre}
                id={item.id}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BikeList;
