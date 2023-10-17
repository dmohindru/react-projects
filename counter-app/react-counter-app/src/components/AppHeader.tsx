import { AppBar, Typography, Toolbar } from "@mui/material";


export const AppHeader: React.FC = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h3" sx={{flexGrow: 1, textAlign: 'center'}}>Counter App</Typography>
            </Toolbar>
        </AppBar>
    );
}