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
import { PlaceDialog } from 'components';

const BetList = props => {
	const { history } = props;
	const id = props.match.params.id;
	const [match, setMatch] = useState(null);
	const [betList, setBetList] = useState([]);
	const [amount, setAmount] = useState('0');
	const [wallet_address, setWalletAddress] = useState('');
	const [open, setOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(0);
	const classes = useStyles();

	useEffect(() => {
		leagues
			.getBetList(id)
			.then(response => {
				if (response.code === 200) {
					setBetList(response.data.bets);
					setMatch(response.data.match);
				} else {
				}
			})
	}, []);

	const handleBack = () => {
		window.history.back();
	}

	const handleCreateBet = () => {
		leagues
			.placeBet(id, amount, wallet_address)
			.then(response => {
				if (response.code === 200) {
					history.push('/games');
				} else {
				}
			})
	}

	const handleOpenDialog = (id) => {
		setSelectedId(id);
		setOpen(true);
	}

	const handleCloseDialog = () => {
		setOpen(false);
	}

	return (
		match && <React.Fragment>
			<Grid container spacing={3} className={classes.leagues}>
				<Grid item xs={12} className={classes.container}>
					<img className={classes.logo} src={match.home_team.logo} alt={match.name} />
					<Typography variant={'h3'}>
						{`${match.home_team.name} vs ${match.away_team.name}`}
					</Typography>
					<img className={classes.logo} src={match.away_team.logo} alt={match.name} />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						{
							betList.map((item, index) => (
								<>
									<Grid item xs={1}>
										<Typography variant='h5'>
											{index + 1}
										</Typography>
									</Grid>
									<Grid item xs={8}>
										<Typography variant='h5'>
											{item.question}
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Button variant="outlined" color="secondary" onClick={() => handleOpenDialog(item.id)}>Place a Bet</Button>
									</Grid>
								</>
							))
						}
					</Grid>
				</Grid>
				<PlaceDialog open={open} handleClose={handleCloseDialog} amount={amount} wallet_address={wallet_address} setAmount={setAmount} setWalletAddress={setWalletAddress} handleCreateBet={handleCreateBet}/>
				<Grid item xs={12}>
					<Button variant="outlined" color="secondary" onClick={handleBack}>Back</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

BetList.propTypes = {
	history: PropTypes.object
};

export default withRouter(BetList);
