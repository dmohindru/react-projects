import { Link } from "react-router-dom";
import { BikeDTO } from "../../dto/dto";
import { useDeleteBikeMutation } from "./BikeApiSlice";
import { IconButton, TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BikeItem: React.FC<BikeDTO> = ({ id, make, model, value, tyre }) => {
  const [deleteBike, { isLoading, isError, data, isSuccess }] =
    useDeleteBikeMutation();

  return (
    <TableRow>
      <TableCell align="center">
        <Link to={`/bike/edit/${id}`}>{make}</Link>
      </TableCell>
      <TableCell align="center">{model}</TableCell>
      <TableCell align="center">{value}</TableCell>
      <TableCell align="center">{tyre}</TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="delete car"
          onClick={() => deleteBike(id ?? "")}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default BikeItem;
