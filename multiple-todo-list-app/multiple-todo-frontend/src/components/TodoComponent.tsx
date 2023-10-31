import { Grid, Typography, Stack } from '@mui/material';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

interface TodoComponentProps {
    title: string
}
export const TodoComponent: React.FC<TodoComponentProps> = ({title}) => {
    return (
        // <Container maxWidth="sm" sx={{backgroundColor: 'lightblue'}}>
        // <Grid container spacing={1} sx={{m: 1}}>
        //     <Grid item md={12}>
        //         <Typography variant="h4" sx={{textAlign: 'center'}}>{title}</Typography>
        //     </Grid>
        //     <Grid item md={12}>
        //         <TodoInput title={title} />
        //     </Grid>
        //     <Grid item md={12}>
        //         <TodoList />
        //     </Grid>
        // </Grid>

        <Stack direction='column' margin={1} sx={{display: 'flex', flexGrow: 1}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>{title}</Typography>
            <TodoInput title={title} />
            <TodoList />
        </Stack>
           
        
    )
}