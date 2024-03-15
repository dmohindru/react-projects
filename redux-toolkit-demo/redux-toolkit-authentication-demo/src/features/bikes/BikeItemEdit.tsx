import { useParams, useNavigate } from "react-router-dom";
import { useUpdateBikeMutation } from "./BikeApiSlice";
import { ChangeEvent, useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { selectBikeById } from "./BikeSlice";
import { useTypeSelector } from "../../hooks/useHooks";
import { RootState } from "../../app/store";

const BikeItemEdit: React.FC = () => {
  const { bikeId } = useParams();
  const navigate = useNavigate();

  const bike = useTypeSelector((state: RootState) =>
    selectBikeById(state, bikeId ?? "")
  );
  const [updateBike] = useUpdateBikeMutation();

  const [make, setMake] = useState(bike.make);
  const [model, setModel] = useState(bike.model);
  const [value, setValue] = useState(bike.value);
  const [tyre, setTyre] = useState(bike.tyre);

  const onMakeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMake(e.target.value);

  const onModelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setModel(e.target.value);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const onTyreChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTyre(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateBike({
        id: bikeId,
        make: make,
        model: model,
        value: value,
        tyre: tyre,
      }).unwrap();
    } catch (err) {
      console.log("Failed to update bike", err);
    }
    setMake("");
    setModel("");
    setValue(0);
    setTyre("");
    navigate("/homepage");
  };

  return (
    <Container>
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        marginY="20px"
      >
        Edit Bike
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
              Bike Make
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="make"
              value={make}
              onChange={onMakeChange}
              size="small"
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Bike Model
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="model"
              value={model}
              onChange={onModelChange}
              size="small"
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
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
              label="value"
              value={value}
              onChange={onValueChange}
              size="small"
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            marginY="20px"
          >
            <Typography fontWeight="bold" flex="30%">
              Tyre
            </Typography>
            <TextField
              sx={{ flex: "70%" }}
              label="tyre"
              value={tyre}
              onChange={onTyreChange}
              size="small"
            />
          </Box>
          <Button variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default BikeItemEdit;
