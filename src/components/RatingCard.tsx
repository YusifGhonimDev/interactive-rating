import { Avatar, Button, Stack, Typography } from '@mui/material';
import { star } from 'assets';
import { Dispatch, FC, SetStateAction } from 'react';
import Rating from './Rating';

interface RatingCardProps {
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  setCurrentRating: Dispatch<SetStateAction<number>>;
  currentRating: number;
}

const RatingCard: FC<RatingCardProps> = ({ setSubmitted, setCurrentRating, currentRating }) => {
  return (
    <>
      <Avatar
        sx={{
          backgroundColor: 'hsl(213deg 19% 22%)',
        }}
      >
        <img src={star} alt="star-icon" />
      </Avatar>
      <Typography fontSize={28} component={'h1'} mt={4} color="white">
        How did we do?
      </Typography>
      <Typography mt={1} color="neutral.mediumGrey">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </Typography>
      <Stack mt={5} mb={4} direction="row" justifyContent="space-between">
        <Rating rating={1} onClick={() => setCurrentRating(1)} ratingSelected={currentRating === 1} />
        <Rating rating={2} onClick={() => setCurrentRating(2)} ratingSelected={currentRating === 2} />
        <Rating rating={3} onClick={() => setCurrentRating(3)} ratingSelected={currentRating === 3} />
        <Rating rating={4} onClick={() => setCurrentRating(4)} ratingSelected={currentRating === 4} />
        <Rating rating={5} onClick={() => setCurrentRating(5)} ratingSelected={currentRating === 5} />
      </Stack>
      <Button
        onClick={() => setSubmitted(true)}
        variant="contained"
        disableElevation
        fullWidth
        sx={{
          color: 'white',
          borderRadius: 20,
          height: 40,
          ':hover': { backgroundColor: 'white', color: 'primary.main' },
        }}
      >
        <Typography>SUBMIT</Typography>
      </Button>
    </>
  );
};

export default RatingCard;
