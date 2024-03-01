import BikeList from "../features/bikes/BIkeList";
import CarList from "../features/cars/CarList";
import { Container } from "@mui/material";
import { useGetCarsQuery } from "../features/cars/CarApiSlice";
import { useGetBikesQuery } from "../features/bikes/BikeApiSlice";

const HomePage: React.FC = () => {
  // Load all cars and bikes entites in home page so that child components can use selector to retrieve data
  const { isError: isCarError, error: carError } = useGetCarsQuery();
  const { isError: isBikeError, error: bikeError } = useGetBikesQuery();
  if (isCarError) {
    console.log("Failed to fetch all cars from remote server", carError);
  }

  if (isBikeError) {
    console.log("Failed to fetch all bikes from remote server", bikeError);
  }

  return (
    <Container maxWidth="lg">
      <CarList />
      <BikeList />
    </Container>
  );
};

export default HomePage;
