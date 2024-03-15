import { faker } from "@faker-js/faker";
import { CarDTO } from "../../dto/dto";
import CarItem from "./CarItem";
import { useAddCarMutation, useGetCarsQuery } from "./CarApiSlice";
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
import { selectAllCars } from "./CarSlice";

const CarList: React.FC = () => {
  const [addCar] = useAddCarMutation();
  const { data } = useGetCarsQuery();
  const allCars = useTypeSelector(selectAllCars);

  const addNewCar = () => {
    console.log("Adding new car");
    const newCarDTO: CarDTO = {
      id: faker.string.uuid(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      value: Number(faker.number.bigInt({ min: 0, max: 20000 })),
      engine: Number(faker.number.bigInt({ min: 1000, max: 2000 })),
    };
    addCar(newCarDTO);
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
            Car List
          </Typography>
        </Box>
        <Box flex="10%" display="flex" justifyContent="center">
          <Button variant="contained" onClick={addNewCar}>
            Add Car
          </Button>
        </Box>
      </Box>
      {/* Header Section ends */}

      {/* Body Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "lightgray" }}>
            <TableRow>
              <BoldTableCell align="center">Make</BoldTableCell>
              <BoldTableCell align="center">Model</BoldTableCell>
              <BoldTableCell align="center">Value</BoldTableCell>
              <BoldTableCell align="center">Engine</BoldTableCell>
              <BoldTableCell align="center">Action</BoldTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCars &&
              allCars.map((car, i) => (
                <CarItem
                  key={i}
                  make={car.make}
                  model={car.model}
                  value={car.value}
                  engine={car.engine}
                  id={car.id}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Body Section Ends */}
    </>
  );
};

export default CarList;
