import {Box, Container} from "@mui/material";
import SetRandomValues from "./components/SetRandomValues";
import DisplayRandomValues from "./components/DispalyRandomValues";
import RandomServiceProvider from "./context/RandomServiceContext";

function App() {
    return (
        <Container maxWidth="md">
            {/* This is demonstration that if two context providers are initiated they will have separate object
             created in memory
             */}
            <Box margin={4} display="flex" flexDirection="column">
                <RandomServiceProvider>
                    <SetRandomValues/>
                    <DisplayRandomValues/>
                </RandomServiceProvider>
            </Box>
            <Box margin={4} display="flex" flexDirection="column">
                <RandomServiceProvider>
                    <SetRandomValues/>
                    <DisplayRandomValues/>
                </RandomServiceProvider>
            </Box>
        </Container>
    );
}

export default App;
