import React from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  styled,
} from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import type { LoginData } from './VehiclesRoot';

const StyledTableRow = styled(TableRow)({
  display: 'flex',
});

const StyledLabelColumn = styled(TableCell)({
  flexGrow: 3,
  fontSize: '20px',
  fontWeight: 'bold',
});

const StyledValueColumn = styled(TableCell)({
  flexGrow: 2,
  fontSize: '20px',
  fontWeight: 'bold',
});

export const VehiclesHome: React.FC = () => {
  const { user, vehicles } = useLoaderData() as LoginData;
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" mt={6} mb={3}>
        Welcome {user.username}
      </Typography>
      <Typography variant="h4" my={3}>
        Your vehicle portfolio
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <StyledTableRow>
              <StyledLabelColumn>Total Asset ($)</StyledLabelColumn>
              <StyledValueColumn align="right">
                {`${vehicles?.reduce((acc, current) => acc + current.value, 0)}.00`}
              </StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledLabelColumn>Total Vehicles</StyledLabelColumn>
              <StyledValueColumn align="right">
                {vehicles?.length}
              </StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledLabelColumn>Total favorite Vehicles</StyledLabelColumn>
              <StyledValueColumn align="right">
                {vehicles?.filter((vehicle) => vehicle.favorite).length}
              </StyledValueColumn>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
