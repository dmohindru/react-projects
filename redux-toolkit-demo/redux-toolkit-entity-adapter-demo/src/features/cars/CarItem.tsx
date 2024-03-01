import { CarDTO } from "../../dto/dto";
import { useDeleteCarMutation } from "./CarApiSlice";
import { Link } from "react-router-dom";
import { IconButton, TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CarItem: React.FC<CarDTO> = ({ id, make, model, value, engine }) => {
  const [deleteCar, { isError, isLoading, data, isSuccess }] =
    useDeleteCarMutation();

  return (
    <TableRow>
      <TableCell align="center">
        <Link to={`/car/edit/${id}`}>{make}</Link>
      </TableCell>
      <TableCell align="center">{model}</TableCell>
      <TableCell align="center">{value}</TableCell>
      <TableCell align="center">{engine}</TableCell>
      <TableCell align="center">
        <IconButton aria-label="delete car" onClick={() => deleteCar(id ?? "")}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CarItem;
