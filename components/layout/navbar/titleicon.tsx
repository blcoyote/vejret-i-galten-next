import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Box } from '@mui/material';
import SunCalc from 'suncalc';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface TitleIconProps extends SvgIconProps {}

export const TitleIcon = (props: TitleIconProps) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'Center',
        alignItems: 'Center',
        marginLeft: '5px',
        paddingRight: '5px',
      }}
    >
      <CurrentIcon {...props} />
    </Box>
  );
};

const CurrentIcon = (props: TitleIconProps) => {
  const times = SunCalc.getTimes(new Date(), 56.09, -0.54);

  const current = new Date();
  const day = current > times.sunrise && current < times.sunset;

  if (day) {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'Center',
          alignItems: 'Center',
          paddingRight: '10px',
        }}
      >
        <CloudIcon fontSize='medium' sx={{ mt: 2, zIndex: 1, ...props.sx }} />
        <WbSunnyIcon fontSize='large' sx={{ mr: 2, position: 'absolute', color: '#ffdd00', ...props.sx }} />
      </Box>
    );
  }
  return <NightsStayIcon fontSize='large' sx={{ zIndex: 1, ...props.sx }} />;
};
