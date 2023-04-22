import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

type Props = {
  unit: string;
  unitHandler: Function;
  value: string;
};
interface IUnits {
  px: string;
  rem: string;
}

const units: IUnits = {
  px: 'Pixels',
  rem: 'REM',
};

const ConvertInput = ({ unit, unitHandler, value }: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    unitHandler(e.target.value);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={1}>
      <Typography>{units[unit]}</Typography>
      <TextField
        value={value}
        onChange={onChangeHandler}
        inputProps={{
          style: {
            textAlign: 'center',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography variant="caption">{unit}</Typography>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default ConvertInput;
