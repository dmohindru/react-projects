import BikeList from "../features/bikes/BIkeList";
import CarList from "../features/cars/CarList";

const HomePage: React.FC = () => {
  return (
    <div>
      <CarList />
      <hr />
      <BikeList />
    </div>
  );
};

export default HomePage;
