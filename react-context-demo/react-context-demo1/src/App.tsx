import { Box, Container } from "@mui/material";
import SetRandomValues from "./components/SetRandomValues";
import DisplayRandomValues from "./components/DispalyRandomValues";
function App() {
  return (
    <Container maxWidth="md">
      <Box margin={4} display="flex" flexDirection="column">
        <SetRandomValues />
        <DisplayRandomValues />
      </Box>
    </Container>
  );
}

export default App;
