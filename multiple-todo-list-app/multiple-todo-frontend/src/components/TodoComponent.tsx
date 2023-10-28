import { Grid, Typography } from '@mui/material';

interface TodoComponentProps {
    title: string
}
export const TodoComponent: React.FC<TodoComponentProps> = ({title}) => {
    return (
        // <Container maxWidth="sm" sx={{backgroundColor: 'lightblue'}}>
        <Grid container spacing={2} sx={{backgroundColor: 'lightblue', flexGrow: 1}}>
            <Grid item mx={12}>
            <Typography sx={{flexGrow: 1, justifyContent: 'center', backgroundColor: 'lightblue'}}>{title}</Typography>
            </Grid>
        </Grid>
           
        // </Container>
    )
}