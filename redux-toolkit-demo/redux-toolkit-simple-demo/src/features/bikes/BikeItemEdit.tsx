import { useParams, useNavigate } from "react-router-dom";
import { useGetBikeByIdQuery, useUpdateBikeMutation } from "./BikeSlice";
import { ChangeEvent, useState, useEffect } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";

const BikeItemEdit: React.FC = () => {
  const { bikeId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBikeByIdQuery(bikeId ?? "");
  const [updateBike] = useUpdateBikeMutation();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [value, setValue] = useState(0);
  const [tyre, setTyre] = useState("");

  useEffect(() => {
    setMake(data?.make ?? "");
    setModel(data?.model ?? "");
    setValue(data?.value ?? 0);
    setTyre(data?.tyre ?? "");
  }, [data]);

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
      });
    } catch (err) {
      console.log("Failed to update bike", err);
    }
    setMake("");
    setModel("");
    setValue(0);
    setTyre("");
    navigate("/");
  };

  if (isLoading) return <div>Loading...</div>;

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
              label="make"
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
              label="make"
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
              label="make"
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
