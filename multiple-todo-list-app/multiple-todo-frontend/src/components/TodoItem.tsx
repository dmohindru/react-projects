import { Paper, Grid, Typography, IconButton, Switch } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

interface TodoItemProps {
    id: string;
    text: string;
    done: boolean;
    deleted: boolean;
}
export const TodoItem: React.FC<TodoItemProps> = ({id, text, done, deleted}: TodoItemProps) => {

    const handleDoneBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
    }

    return (
        <Paper sx={{my: 1}}>
            <Grid container>
                <Grid item md={10}>
                    <Typography variant='h5' style={{textDecoration: done ? 'line-through' : 'none'}}>{text}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Switch size="small" onChange={handleDoneBtn} />
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