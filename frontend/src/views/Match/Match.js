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

const Match = props => {
	const { history } = props;
	const id = props.match.params.id;
	const [match, setMatch] = useState(null);
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

	const handleGotoAvailableBets = () => {
		history.push(`/bet_list/${match.id}`)
	}

	const handleCreateNewBet = () => {
		history.push(`/create_bet/${match.id}`)
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
				<Grid item xs={6} className={classes.title}>
					<Typography variant={'h4'}>Description:</Typography>
				</Grid>
				<Grid item xs={6}>
				<Typography variant={'h5'}>{match.description}</Typography>
				</Grid>
				<Grid item xs={6} className={classes.title}>
					<Typography variant={'h4'}>Ranking:</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant={'h5'}>{match.ranking}</Typography>
				</Grid>
				<Grid item xs={6} className={classes.title}>
					<Typography variant={'h4'}>Place:</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant={'h5'}>{match.place}</Typography>
				</Grid>
				<Grid item container justify="space-between">
				<Button variant="outlined" color="secondary" onClick={handleBack}>Back</Button>
				<Button variant="outlined" color="secondary" onClick={handleGotoAvailableBets}>Available Bets</Button>
				<Button variant="outlined" color="secondary" onClick={handleCreateNewBet}>Create a New Bet</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

Match.propTypes = {
	history: PropTypes.object
};

export default withRouter(Match);
