import { Paper, Grid, Typography, IconButton, Switch } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

interface TodoItemProps {
    id: string;
    text: string;
    done: boolean;
    deleted: boolean;
}
export const TodoItem: React.FC<TodoItemProps> = ({id, text, done, deleted}: TodoItemProps) => {

    return (
        <Paper sx={{my: 1}}>
            <Grid container>
                <Grid item md={10}>
                    <Typography variant='h5'>{text}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Switch size="small" />
                </Grid>
                <Grid item md={1}>
                    <IconButton
                        aria-label='cancel'
                        color='error'
                        size='small'
                    ><CancelIcon /></IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}