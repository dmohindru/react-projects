import { BikeDTO } from "../../dto/dto";

const BikeItem: React.FC<BikeDTO> = ({ id, make, model, value, tyre }) => {
  return (
    <div>
      {id}, {make}, {model}, {value}, {tyre}
    </div>
  );
};

export default BikeItem;
