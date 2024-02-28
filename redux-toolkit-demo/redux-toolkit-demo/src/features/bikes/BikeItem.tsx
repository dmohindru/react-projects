import { BikeDTO } from "../../dto/dto";
import { useDeleteBikeMutation } from "./BikeSlice";

const BikeItem: React.FC<BikeDTO> = ({ id, make, model, value, tyre }) => {
  const [deleteBike, { isLoading, isError, data, isSuccess }] =
    useDeleteBikeMutation();

  return (
    <div>
      {id}, {make}, {model}, {value}, {tyre}{" "}
      <button onClick={() => deleteBike(id ?? "")}>Delete</button>
    </div>
  );
};

export default BikeItem;
