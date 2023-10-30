import { Grid, Typography } from '@mui/material';

interface TodoComponentProps {
    title: string
}
export const TodoComponent: React.FC<TodoComponentProps> = ({title}) => {
    return (
        // <Container maxWidth="sm" sx={{backgroundColor: 'lightblue'}}>
        <Grid container spacing={1} sx={{m: 0.5}}>
            <Grid item md={12}>
            <Typography sx={ {backgroundColor: 'lightblue', textAlign: 'center'}}>{title}</Typography>
            </Grid>
        </Grid>
           
        // </Container>
    )
}