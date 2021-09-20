import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  progress: {
    width: '100%',
  },
});

export default function Enemy({ hp, totalHp }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        alt="Monster"
        className="monster"
        src="https://www.psyborg.com.au/wp-content/uploads/2011/11/Illustration-Monster.jpg"
      />
      <div>{`${hp} / ${totalHp}`}</div>
      <LinearProgress
        className={classes.progress}
        value={(100 * hp) / totalHp}
        variant="determinate"
      />
    </Box>
  );
}

Enemy.propTypes = {
  hp: PropTypes.number.isRequired,
  totalHp: PropTypes.number.isRequired,
};
