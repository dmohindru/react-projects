import { Container, Typography } from '@mui/material';
import { TodoMenu } from './TodoMenu';


export const TodoApp: React.FC = () => {


    return (
        <Container maxWidth='md' sx={{backgroundColor: 'lightgrey'}}>
            <Typography variant='h4'>Multiple TODO List App</Typography>
            <TodoMenu />

        </Container>
    )
}