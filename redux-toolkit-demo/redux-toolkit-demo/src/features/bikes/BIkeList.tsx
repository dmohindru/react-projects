import { BikeDTO } from "../../dto/dto";
import BikeItem from "./BikeItem";

const bikes: BikeDTO[] = [
  {
    id: "9fd0e9b4-b69c-4f75-91fd-93053caff13b",
    make: "Hero",
    model: "Jet",
    value: 40,
    tyre: "26X1.75",
  },
  {
    id: "9fd0e9b4-b69c-4f75-91fd-93053caff13c",
    make: "Hero",
    model: "pulser",
    value: 50,
    tyre: "28X1.5",
  },
  {
    id: "9fd0e9b4-b69c-4f75-91fd-93053caff13e",
    make: "Avon",
    model: "Super Star",
    value: 60,
    tyre: "24X1.75",
  },
];

const BikeList: React.FC = () => {
  return (
    <div>
      <button>Add Bike</button>
      <h3>Bike List</h3>
      <ul>
        {bikes.map((item, i) => (
          <li>
            <BikeItem
              key={item.id}
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
