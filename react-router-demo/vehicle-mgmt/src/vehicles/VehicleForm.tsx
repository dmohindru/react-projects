import React from 'react';
import {
  Typography,
  Button,
  Box,
  Autocomplete,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { FormInputField } from '../common/StyledComponent';
import { useFormik } from 'formik';
import * as yup from 'yup';
import type { Vehicle } from '../data';
import { useSubmit, useNavigate } from 'react-router-dom';

type VehicleFormProps = {
  labelAction: string;
  vehicle?: Vehicle;
};

const vehicleFormSchema = yup.object().shape({
  make: yup.string().required('Vehicle make is required'),
  model: yup.string().required('Vehicle model is required'),
  year: yup
    .number()
    .required('Year is required')
    .positive('Year must be a positive number')
    .integer('Year must be integer'),
  value: yup
    .number()
    .required('Vehicle value is required')
    .positive('Vehicle Value must be positive number'),
});

const getYears = (): number[] => {
  const startYear = 1990;
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );
};

export const VehicleForm: React.FC<VehicleFormProps> = ({
  labelAction,
  vehicle,
}) => {
  const navigate = useNavigate();
  const submit = useSubmit();

  const initialValue: Vehicle = {
    make: vehicle?.make ?? '',
    model: vehicle?.model ?? '',
    year: vehicle?.year ?? 1990,
    value: vehicle?.value ?? 0,
    favorite: vehicle?.favorite ?? false,
  };

  const handleCancelClick = () => {
    navigate('/vehicles');
  };

  const formik = useFormik<Vehicle>({
    initialValues: initialValue,
    validationSchema: vehicleFormSchema,
    onSubmit: async (values) => {
      submit(values, { method: 'POST' });
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
    setFieldValue,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: '100%' }}
        alignItems="center"
      >
        <Typography
          display="flex"
          justifyContent="center"
          mt={6}
          variant="h5"
          fontWeight="bold"
        >
          {labelAction} Vehicle Details
        </Typography>
        <Box width="60%" mt={2} display="flex" flexDirection="column">
          <FormInputField
            label="Make"
            size="small"
            name="make"
            value={values.make}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.make && !!errors.make}
            helperText={touched.make && errors.make}
          />
          <FormInputField
            label="Model"
            size="small"
            name="model"
            value={values.model}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.model && !!errors.model}
            helperText={touched.model && errors.model}
          />
          <Autocomplete
            options={getYears()}
            getOptionLabel={(option: number) => option.toString()}
            disablePortal
            value={values.year}
            onBlur={handleBlur}
            onChange={(event, newValue) => {
              setFieldValue('year', newValue);
            }}
            renderInput={(params) => (
              <FormInputField
                {...params}
                label="Year"
                size="small"
                name="year"
                error={!!touched.year && !!errors.year}
                helperText={touched.year && errors.year}
              />
            )}
          />
          <FormInputField
            label="Value"
            size="small"
            name="value"
            value={values.value}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.value && !!errors.value}
            helperText={touched.value && errors.value}
          />
          <FormControl sx={{ my: 1 }}>
            <InputLabel id="favorite-label">Favorite</InputLabel>
            <Select
              labelId="favorite-label"
              name="favorite"
              value={values.favorite}
              label="Favorite"
              onChange={handleChange}
              size="small"
            >
              <MenuItem value={'true'}>Yes</MenuItem>
              <MenuItem value={'false'}>No</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" flexGrow={1}>
            <Button
              variant="contained"
              type="submit"
              sx={{ flex: 1, mr: 0.5, mt: 1 }}
              disabled={!(dirty && isValid)}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ flex: 1, ml: 0.5, mt: 1 }}
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
