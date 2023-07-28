import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const RadioColored = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '140px',
        // margin: '0 auto',
      }}
    >
      <RadioGroup
        aria-labelledby="label-changer"
        defaultValue="gray"
        name="radio-buttons-group"
        sx={{ display: 'flex', gap: '8px' }}
        row
      >
        <FormControlLabel
          value="blue"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--8FA1D0)',
                '&.Mui-checked': {
                  color: 'var(--8FA1D0)',
                  backgroundColor: '#151512',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="pink"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--E09CB5)',
                '&.Mui-checked': {
                  color: 'var(--E09CB5)',
                  backgroundColor: '#151512',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="green"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'var(--BEDBB0)',
                '&.Mui-checked': {
                  color: 'var(--BEDBB0)',
                  backgroundColor: '#151512',
                },
              }}
              disableRipple
            />
          }
        />
        <FormControlLabel
          value="gray"
          sx={{ margin: '0' }}
          control={
            <Radio
              sx={{
                width: '14px',
                height: '14px',
                color: 'transparent',
                backgroundColor: 'rgba(255, 255, 255, 0.30)',
                '&.Mui-checked': {
                  color: 'rgba(255, 255, 255, 0.30)',
                  backgroundColor: '#151512',
                },
              }}
              disableRipple
            />
          }
        />
      </RadioGroup>
    </div>
  );
};

export default RadioColored;
