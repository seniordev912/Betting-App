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

const Matches = props => {
	const { history } = props;
	const id = props.match.params.id;
	const [matches, setMatches] = useState([]);
	const classes = useStyles();
	
	useEffect(() => {
		leagues
		.getMatches(id)
		.then(response => {
			if (response.code === 200) {
				setMatches(response.data.matches);
			} else {
			}
		})
	}, []);

	const handleBack = () => {
		history.push('/games');
	}

	const handleGotoMatch = (id) => {
		history.push(`/matches/${id}`);
	}
	return (
		<React.Fragment>
			<Typography variant={'h2'}>
				Matches:
			</Typography>
			<Grid container spacing={3} className={classes.leagues}>
				{
					matches.map((item, index ) => (
							<Grid item xs={12} className={classes.container} onClick={() => handleGotoMatch(item.id)}>
								<img className={classes.logo} src={item.home_team.logo} alt={item.name} key={index} />
								<Typography variant={'h3'}>
									{ `${item.home_team.name} vs ${item.away_team.name}` }
								</Typography>
								<img className={classes.logo} src={item.away_team.logo} alt={item.name} key={index} />
							</Grid>
					))
				}
				<Button variant="outlined" color="secondary" onClick={handleBack}>Back</Button>
			</Grid>
		</React.Fragment>
	);
};

Matches.propTypes = {
	history: PropTypes.object
};

export default withRouter(Matches);
