import BikeList from "../features/bikes/BIkeList";
import CarList from "../features/cars/CarList";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useGetAccessTokenMutation } from "../features/auth/authApiSlice";
import { useEffect } from "react";
const HomePage: React.FC = () => {
  const [getAccessToken] = useGetAccessTokenMutation();

  const fetchAccessToken = async () => {
    console.log("Fetching new access token on HomePage....");
    await getAccessToken({
      email: "dhruv@email.com",
      password: "dhruv",
    }).unwrap();
  };

  // This technique idea is taken from this blog
  // https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
  useEffect(() => {
    const intervalId = setInterval(fetchAccessToken, 20000);
    return () => clearInterval(intervalId);
  });

  return (
    <Container maxWidth="lg">
      <Link to="/">
        <Button variant="contained">Go Landing Page</Button>
      </Link>
      <CarList />
      <BikeList />
    </Container>
  );
};

export default HomePage;
