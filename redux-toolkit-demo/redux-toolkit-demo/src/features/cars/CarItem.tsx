import { CarDTO } from "../../dto/dto";
import { useDeleteCarMutation } from "./CarSlice";
const CarItem: React.FC<CarDTO> = ({ id, make, model, value, engine }) => {
  const [deleteCar, { isError, isLoading, data, isSuccess }] =
    useDeleteCarMutation();

  return (
    <div>
      {id}, {make}, {model}, {value}, {engine}
      <button onClick={() => deleteCar(id)}>Delete</button>
    </div>
  );
};

export default CarItem;
