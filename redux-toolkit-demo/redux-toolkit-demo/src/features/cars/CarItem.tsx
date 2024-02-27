import { CarDTO } from "../../dto/dto";
const CarItem: React.FC<CarDTO> = ({ id, make, model, value, engine }) => {
  return (
    <div>
      {id}, {make}, {model}, {value}, {engine}
      <button>Delete</button>
    </div>
  );
};

export default CarItem;
