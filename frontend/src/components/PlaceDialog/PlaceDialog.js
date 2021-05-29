import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogContent, DialogActions, Grid, Button, Typography,DialogTitle } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  input: {
    padding: theme.spacing(1)
  },
  widget: {
    '& .MuiPaper-root': {
      height: '400px !important'
    }
  }
}));

const PlaceDialog = props => {
  const { open, handleClose, amount, wallet_address, setAmount, setWalletAddress, handleCreateBet } = props;

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.widget}
    >
      <DialogTitle id="form-dialog-title">Let's Place</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant={'h5'}>
              Wallet Address
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <input type='text' value={wallet_address} onChange={(e) => setWalletAddress(e.target.value)} className={classes.input}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={'h5'}>
              Amount
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} className={classes.input} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" onClick={handleCreateBet}>
          Place a Bet
        </Button>
      </DialogActions>

    </Dialog>

  );
};

export default PlaceDialog;
