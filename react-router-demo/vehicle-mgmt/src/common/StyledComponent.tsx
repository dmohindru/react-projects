import { TextField, TableRow, TableCell, styled } from '@mui/material';

export const FormInputField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(1, 0),
}));

export const StyledTableRow = styled(TableRow)({
  display: 'flex',
});

export const StyledLabelColumn = styled(TableCell)({
  flexGrow: 1,
  fontSize: '20px',
  fontWeight: 'bold',
  width: '50%',
});

export const StyledValueColumn = styled(TableCell)({
  flexGrow: 1,
  fontSize: '20px',
  fontWeight: 'bold',
  width: '50%',
});
