import { Box, Stack, Typography } from '@mui/material';
import { illustration } from 'assets';
import { FC } from 'react';

interface ThankYouCardProps {
  rating: number;
}

const ThankYouCard: FC<ThankYouCardProps> = ({ rating }) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <img src={illustration} alt="illustration" />
      <Box mt={3}>
        <Typography
          bgcolor="hsl(213deg 19% 22%)"
          color="primary.main"
          width={200}
          p={1}
          borderRadius={4}
          textAlign="center"
        >
          You selected {rating} out of 5
        </Typography>
      </Box>
      <Typography fontSize={28} color="white" mt={4}>
        Thank you!
      </Typography>
      <Typography mt={2} color="neutral.mediumGrey" textAlign="center" fontSize={14}>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to
        <br />
        get in touch!
      </Typography>
    </Stack>
  );
};

export default ThankYouCard;
