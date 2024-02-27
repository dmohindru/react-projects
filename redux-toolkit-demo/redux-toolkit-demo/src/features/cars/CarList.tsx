import { CarDTO } from "../../dto/dto";
import CarItem from "./CarItem";
import { useGetCarsQuery } from "./CarSlice";

// const cars: CarDTO[] = [
//   {
//     make: "Ford",
//     model: "focus",
//     value: 14000,
//     engine: 500,
//     id: "c350da85-e399-4ec7-a29b-36b0bb05c745",
//   },
//   {
//     id: "79a3a801-9ef3-41b7-a73e-7ee2982f0efe",
//     make: "Hyundai",
//     model: "i20",
//     value: 4000,
//     engine: 1000,
//   },
//   {
//     id: "79a3a801-9ef3-41b7-a73e-7ee2982f0efd",
//     make: "Kia",
//     model: "Rio",
//     value: 8000,
//     engine: 1200,
//   },
// ];

const CarList: React.FC = () => {
  const { data, isLoading, isFetching, isError } = useGetCarsQuery();
  return (
    <div>
      <button>Add Car</button>
      <h3>Car List</h3>
      <ul>
        {data &&
          data.map((car, i) => (
            <li>
              <CarItem
                key={car.id}
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
