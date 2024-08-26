import { TextField, styled } from '@mui/material';

export const FormInputField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(1, 0),
}));
