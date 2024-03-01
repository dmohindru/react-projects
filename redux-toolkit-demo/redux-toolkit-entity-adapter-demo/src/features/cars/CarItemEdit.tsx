import { useParams, useNavigate } from "react-router-dom";
import { useUpdateCarMutation } from "./CarApiSlice";
import { selectCarById } from "./CarSlice";
import { useTypeSelector } from "../../hooks/useHooks";
import { ChangeEvent, useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { RootState } from "../../app/store";

const CarItemEdit: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const navigate = useNavigate();

  const car = useTypeSelector((state: RootState) =>
    selectCarById(state, carId ?? "")
  );

  const [updateCar] = useUpdateCarMutation();

  const [make, setMake] = useState(car.make);
  const [model, setModel] = useState(car.model);
  const [value, setValue] = useState(car.value);
  const [engine, setEngine] = useState(car.engine);

  const onMakeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMake(e.target.value);

  const onModelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setModel(e.target.value);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const onEngineChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEngine(+e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateCar({
        id: carId,
        make: make ?? "",
        model: model ?? "",
        value: value ?? 0,
        engine: engine ?? 0,
      }).unwrap();
    } catch (err) {
      console.log("Failed to update car", err);
    }
    setMake("");
    setModel("");
    setEngine(0);
    setValue(0);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        marginY="20px"
      >
        Edit Car
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Car Make
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="make"
              value={make}
              onChange={onMakeChange}
              size="small"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Car Model
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="model"
              value={model}
              onChange={onModelChange}
              size="small"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Value
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="model"
              value={value}
              onChange={onValueChange}
              size="small"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Engine
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="model"
              value={engine}
              onChange={onEngineChange}
              size="small"
            />
          </Box>
          <Button variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
      <br />
    </Container>
  );
};

export default CarItemEdit;
