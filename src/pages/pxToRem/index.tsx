import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ConvertInput from './ConvertInput';

interface IUnitState {
  unit: string;
  unitValue: string;
}

const PxToRemConverter = () => {
  const [unitState, setUnitState] = useState<IUnitState>({
    unit: '',
    unitValue: '',
  });

  const pxToRem = (px: number) => {
    return px / 16;
  };

  const remToPx = (rem: number) => {
    return rem * 16;
  };

  const tryConvert = (unitValue: string, convert: Function) => {
    const input = parseFloat(unitValue);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  const pixelHandler = (value: string) => {
    setUnitState({
      unit: 'px',
      unitValue: value,
    });
  };
  const remHandler = (value: string) => {
    setUnitState({
      unit: 'rem',
      unitValue: value,
    });
  };
  const unit = unitState.unit;
  const unitValue = unitState.unitValue;
  const pixels = unit === 'rem' ? tryConvert(unitValue, pxToRem) : unitValue;
  const rem = unit === 'px' ? tryConvert(unitValue, remToPx) : unitValue;

  return (
    <>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Typography variant="h4">Px To Rem Converter</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={10} marginTop={10}>
          <ConvertInput unit="px" unitHandler={pixelHandler} value={pixels} />
          <ConvertInput unit="rem" unitHandler={remHandler} value={rem} />
        </Stack>
      </Stack>
    </>
  );
};

export default PxToRemConverter;
