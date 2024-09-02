import React, { useState } from 'react';
import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useSubmit,
  useNavigate,
} from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  TableContainer,
  Table,
  TableBody,
  Paper,
  Box,
} from '@mui/material';
import { getUserVehicle, getCurrentUser, Vehicle } from '../data';
import { StyledTableRow, StyledValueColumn } from '../common/StyledComponent';
import { ConfirmDialog } from '../common/ConfirmDialog';

export async function loader({ params }: LoaderFunctionArgs) {
  const { vehicleId } = params;
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  } else if (!vehicleId) {
    return redirect('/vehicles');
  } else {
    const vehicle = await getUserVehicle(user.username, vehicleId);
    if (!vehicle) {
      throw new Response('', {
        status: 404,
        statusText: `Vehicle with id [${vehicleId}] not found`,
      });
    }
    return vehicle;
  }
}

export const VehicleDetails: React.FC = () => {
  const vehicle = useLoaderData() as Vehicle;
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const submit = useSubmit();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setOpenConfirmDialog(true);
  };

  const handleEditClick = () => {
    navigate('edit');
  };

  const handleConfirm = () => {
    setOpenConfirmDialog(false);
    submit(null, { method: 'POST', action: 'delete' });
  };

  const handleCloseDialog = () => {
    setOpenConfirmDialog(false);
  };

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
        Vehicle Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <StyledTableRow>
              <StyledValueColumn>Make</StyledValueColumn>
              <StyledValueColumn>{vehicle.make}</StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledValueColumn>Model</StyledValueColumn>
              <StyledValueColumn>{vehicle.model}</StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledValueColumn>Year</StyledValueColumn>
              <StyledValueColumn>{vehicle.year}</StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledValueColumn>Value</StyledValueColumn>
              <StyledValueColumn>{vehicle.value}</StyledValueColumn>
            </StyledTableRow>
            <StyledTableRow>
              <StyledValueColumn>Favorite</StyledValueColumn>
              <StyledValueColumn>
                {vehicle.favorite ? 'Yes' : 'No'}
              </StyledValueColumn>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" mt={3} width="100%" justifyContent="center">
        <Button variant="contained" onClick={handleEditClick} sx={{ mr: 2 }}>
          Edit
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={handleDeleteClick}
          sx={{ ml: 2 }}
        >
          Delete
        </Button>
      </Box>
      <ConfirmDialog
        open={openConfirmDialog}
        title="Confirm Deletion"
        description={`Are you sure you want to delete ${vehicle.make} ${vehicle.model} vehicle`}
        onClose={handleCloseDialog}
        onConfirm={handleConfirm}
      />
    </Container>
  );
};
