import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Grid,
	Typography,
	Button
} from '@material-ui/core';
import useStyles from './style';
import leagues from '../../apis/leagues';
import {Alert} from 'components';
const BetCreate = props => {
	const { history } = props;
	const id = props.match.params.id;
	const [match, setMatch] = useState(null);
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('0');
	const [wallet_address, setWalletAddress] = useState('');
	const classes = useStyles();

	useEffect(() => {
		leagues
			.getMatch(id)
			.then(response => {
				if (response.code === 200) {
					setMatch(response.data.match);
				} else {
				}
			})
	}, []);

	const handleBack = () => {
		window.history.back();
	}

	const handleCreate = () => {
		leagues
		.createBet(id, description, amount, wallet_address)
		.then(response => {
			if (response.code === 200) {
				history.push('/games');
			} else {
			}
		})
	}

	const handleChangeDescription = (e) => {
		setDescription(e.target.value);
	}

	const handleChangeAmount = (e) => {
		setAmount(e.target.value);
	}

	const handleChangeWalletAddress = (e) => {
		setWalletAddress(e.target.value);
	}

	return (
		match && <React.Fragment>
			<Grid container spacing={3} className={classes.leagues}>
				<Grid item xs={12} className={classes.container}>
					<img className={classes.logo} src={match.home_team.logo} alt={match.name}/>
					<Typography variant={'h3'}>
						{`${match.home_team.name} vs ${match.away_team.name}`}
					</Typography>
					<img className={classes.logo} src={match.away_team.logo} alt={match.name}/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={'h4'}>
						Write your description
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<textarea type='text' value={description} rows={5} className={classes.textarea} onChange={handleChangeDescription}/>
				</Grid>
				<Grid item xs={6}>
					<Typography variant={'h4'}>
						Placed Amount
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<input type='text' value={amount} className={classes.textarea} onChange={handleChangeAmount}/>
				</Grid>
				<Grid item xs={6}>
					<Typography variant={'h4'}>
						Wallet Address
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<input type='text' value={wallet_address} className={classes.textarea} onChange={handleChangeWalletAddress}/>
				</Grid>
				<Grid item container justify="space-between">
				<Button variant="outlined" color="secondary" onClick={handleBack}>Back</Button>
				<Button variant="outlined" color="secondary" onClick={handleCreate}>Create a Bet</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

BetCreate.propTypes = {
	history: PropTypes.object
};

export default withRouter(BetCreate);
