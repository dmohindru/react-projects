import { BikeDTO } from "../../dto/dto";
import BikeItem from "./BikeItem";
import { useAddBikeMutation } from "./BikeApiSlice";
import { faker } from "@faker-js/faker";
import {
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableBody,
  TableRow,
  styled,
} from "@mui/material";
import { useTypeSelector } from "../../hooks/useHooks";
import { selectAllBikes } from "./BikeSlice";

const BikeList: React.FC = () => {
  const [addBike] = useAddBikeMutation();
  const allBikes = useTypeSelector(selectAllBikes);

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

  const BoldTableCell = styled(TableCell)({
    fontWeight: "bold",
  });

  return (
    <>
      {/* Header Section */}
      <Box display="flex" flexDirection="row" sx={{ my: "30px" }}>
        <Box flex="90%" display="flex" justifyContent="center">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Bike List
          </Typography>
        </Box>
        <Box flex="10%" display="flex" justifyContent="center">
          <Button variant="contained" onClick={addNewBike}>
            Add Bike
          </Button>
        </Box>
      </Box>

      {/* Body Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "lightgray" }}>
            <TableRow>
              <BoldTableCell align="center">Make</BoldTableCell>
              <BoldTableCell align="center">Model</BoldTableCell>
              <BoldTableCell align="center">Value</BoldTableCell>
              <BoldTableCell align="center">Tyre</BoldTableCell>
              <BoldTableCell align="center">Action</BoldTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBikes &&
              allBikes.map((bike, i) => (
                <BikeItem
                  key={bike.id}
                  make={bike.make}
                  model={bike.model}
                  value={bike.value}
                  tyre={bike.tyre}
                  id={bike.id}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Body Section Ends */}
    </>
  );
};

export default BikeList;
