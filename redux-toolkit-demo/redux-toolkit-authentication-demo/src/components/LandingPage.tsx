import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetAccessTokenMutation } from "../features/auth/authApiSlice";
import { useEffect } from "react";
const LandingPage: React.FC = () => {
  // Get access token on hard refresh
  const [getAccessToken] = useGetAccessTokenMutation();

  useEffect(() => {
    const fetchAccessToken = async () => {
      console.log("Fetching new access token on Landing page...");
      await getAccessToken({
        email: "dhruv@email.com",
        password: "dhruv",
      }).unwrap();
    };
    fetchAccessToken();
  }, [getAccessToken]);

  return (
    <Container maxWidth="lg">
      <Link to="/homepage">
        <Button variant="contained">Go to homepage</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
