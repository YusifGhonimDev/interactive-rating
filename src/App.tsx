import { Box, Stack } from '@mui/material';
import RatingCard from 'components/RatingCard';
import ThankYouCard from 'components/ThankYouCard';
import { useState } from 'react';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh" bgcolor="neutral.veryDarkBlue">
      <Box bgcolor="neutral.darkBlue" width={400} height={400} borderRadius={8} p={4}>
        {submitted ? (
          <ThankYouCard rating={currentRating} />
        ) : (
          <RatingCard setSubmitted={setSubmitted} setCurrentRating={setCurrentRating} currentRating={currentRating} />
        )}
      </Box>
    </Stack>
  );
};

export default App;
