import BikeList from "../features/bikes/BIkeList";
import CarList from "../features/cars/CarList";
import { Container } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CarList />
      <hr />
      <BikeList />
    </Container>
  );
};

export default HomePage;
