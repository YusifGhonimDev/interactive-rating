import { Avatar, ButtonBase, Typography } from '@mui/material';
import { FC } from 'react';

interface RatingProps {
  rating: number;
  ratingSelected: boolean;
  onClick: () => void;
}

const Rating: FC<RatingProps> = ({ rating, ratingSelected, onClick }) => {
  return (
    <ButtonBase centerRipple>
      <Avatar
        onClick={onClick}
        sx={{
          backgroundColor: ratingSelected ? 'neutral.mediumGrey' : 'hsl(213deg 19% 22%)',
          width: 52,
          height: 52,
          transition: 'background-color 0.3s ease-in-out',
          ':hover': {
            backgroundColor: 'primary.main',
            '> .MuiTypography-root': {
              color: 'white',
              transition: 'color 0.3s ease-in-out',
            },
          },
        }}
      >
        <Typography color={ratingSelected ? 'white' : 'neutral.mediumGrey'}>{rating}</Typography>
      </Avatar>
    </ButtonBase>
  );
};

export default Rating;
