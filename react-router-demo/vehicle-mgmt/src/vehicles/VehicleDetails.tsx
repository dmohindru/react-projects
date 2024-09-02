import React from 'react';
import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  Form,
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
                {vehicle.favorite ? 'true' : 'false'}
              </StyledValueColumn>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" mt={3} width="100%" justifyContent="center">
        <Form>
          <Button variant="contained" sx={{ mr: 2 }}>
            Edit
          </Button>
        </Form>

        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            // eslint-disable-next-line no-restricted-globals
            if (!confirm('Please confirm you want to delete this record.')) {
              event.preventDefault();
            }
          }}
        >
          <Button
            color="error"
            variant="contained"
            type="submit"
            sx={{ ml: 2 }}
          >
            Delete
          </Button>
        </Form>
      </Box>
    </Container>
  );
};
