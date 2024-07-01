import React from 'react';
import {Box, Container} from "@mui/material";
import SetRandomValues from "./components/SetRandomValues";
import DisplayRandomValues from "./components/DisplayRandomValues";
import {RandomRepeatedServiceProvider} from "./context/RandomRepeatedServiceContext";

function App() {
    return (
        <Container maxWidth="md">
            <RandomRepeatedServiceProvider>
                <Box margin={4} display="flex" flexDirection="column">
                    <SetRandomValues/>
                    <DisplayRandomValues/>
                </Box>
            </RandomRepeatedServiceProvider>
            <RandomRepeatedServiceProvider>
                <Box margin={4} display="flex" flexDirection="column">
                    <SetRandomValues/>
                    <DisplayRandomValues/>
                </Box>
            </RandomRepeatedServiceProvider>
        </Container>
    );
}

export default App;
