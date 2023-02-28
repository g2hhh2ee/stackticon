import { Box } from '@mui/material';
import Stack from 'components/stack/Stack';
import React, { forwardRef } from 'react';

interface StacksProps {
  color: 'black' | 'white';
  selecteds: string[];
}

const Stacks = forwardRef<HTMLDivElement, StacksProps>(({ color, selecteds }, targetRef) => {
  return (
    <Box
      ref={targetRef}
      bgcolor={'common.' + color}
      display='grid'
      gridTemplateRows='auto'
      gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
      color='common.white'
      width='700px'
      height='auto'
      padding='10px'
    >
      {selecteds.map((select: string) => (
        <Stack key={select} stackName={select}></Stack>
      ))}
    </Box>
  );
});
Stacks.displayName = 'Stacks';

export default Stacks;
