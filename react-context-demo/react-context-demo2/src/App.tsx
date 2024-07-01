import React from 'react';
import {Box, Container} from "@mui/material";
import SetRandomValues from "./components/SetRandomValues";
import DisplayRandomValues from "./components/DisplayRandomValues";
import {RandomRepeatedServiceProvider} from "./context/RandomServiceContextProvider";
import {repeatedRandomValueService, fakerRandomValueService} from "./service/RandomService";

function App() {
    return (
        <Container maxWidth="md">
            <RandomRepeatedServiceProvider>
                <Box margin={4} display="flex" flexDirection="column">
                    <SetRandomValues title="Default Values Random Service"/>
                    <DisplayRandomValues/>
                </Box>
            </RandomRepeatedServiceProvider>
            <RandomRepeatedServiceProvider randomService={repeatedRandomValueService()}>
                <Box margin={4} display="flex" flexDirection="column">
                    <SetRandomValues title="Repeated Values Random Service"/>
                    <DisplayRandomValues/>
                </Box>
            </RandomRepeatedServiceProvider>
            <RandomRepeatedServiceProvider randomService={fakerRandomValueService()}>
                <Box margin={4} display="flex" flexDirection="column">
                    <SetRandomValues title="Faker Values Random Service"/>
                    <DisplayRandomValues/>
                </Box>
            </RandomRepeatedServiceProvider>
        </Container>
    );
}

export default App;
