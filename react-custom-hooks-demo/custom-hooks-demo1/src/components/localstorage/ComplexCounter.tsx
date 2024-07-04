import React from 'react';
import {Box, Typography, IconButton} from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type counter = {
    name: string
    value: number
}

const createCounterControl= (counterName: string, counterValue:number): React.ReactElement => (
    <Box display="flex" flexDirection="row" my={0.5}>
        <Box sx={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="body1" fontWeight="bold">
                {counterName}:
            </Typography>
        </Box>
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <IconButton color="primary" size="small"><AddIcon/></IconButton>
            <Typography
                variant="body1"
                fontWeight="bold"
                mx={2}
                width='30px'
                textAlign="center">
                {counterValue}
            </Typography>
            <IconButton color="primary" size="small"><RemoveIcon/></IconButton>
        </Box>
    </Box>

)

const ComplexCounter: React.FC = () => {
    const counters: counter[] = [
        {name: 'counter1', value: 20},
        {name: 'counter2', value: 30},
        {name: 'counter3', value: 2},
        {name: 'counter4', value: 200},
    ]
    return (
        <ComponentContainer>
            <Box display="flex" flexDirection="column">
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        my: 0.5
                    }}
                    variant="h5"
                    fontWeight="bold"
                >
                    Complex Counter
                </Typography>
                {counters.map(({name, value}) => createCounterControl(name, value))}
            </Box>
        </ComponentContainer>
    );
};

export default ComplexCounter;
