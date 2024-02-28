import { CarDTO } from "../../dto/dto";
import { useDeleteCarMutation } from "./CarSlice";
import { Link } from "react-router-dom";
const CarItem: React.FC<CarDTO> = ({ id, make, model, value, engine }) => {
  const [deleteCar, { isError, isLoading, data, isSuccess }] =
    useDeleteCarMutation();

  return (
    <div>
      <Link to={`/car/edit/${id}`}>
        {id}, {make}, {model}, {value}, {engine}
      </Link>
      <button onClick={() => deleteCar(id ?? "")}>Delete</button>
    </div>
  );
};

export default CarItem;
