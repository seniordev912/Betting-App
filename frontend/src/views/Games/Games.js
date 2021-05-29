import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Grid,
	Typography
} from '@material-ui/core';
import useStyles from './style';
import leagues from '../../apis/leagues';
import constants from '../../utils/constants';
import clsx from 'clsx';

const Games = props => {
	const { history } = props;
	const [games, setGames] = useState([]);
	const classes = useStyles();
	
	useEffect(() => {
		leagues
		.getList()
		.then(response => {
			if (response.code === 200) {
				setGames(response.data.leagues);
			} else {
			}
		})
	}, []);

	const handleGotoMatch = (id) => {
		history.push(`/games/${id}`);
	}

	return (
		<React.Fragment>
			<Typography variant={'h2'}>
				Latest Games:
			</Typography>
			<Grid container spacing={3} className={classes.leagues}>
				{
					games.map((item, index ) => (
							<Grid item xs={12} className={classes.container} onClick={() => handleGotoMatch(item.id)}>
								<img className={classes.logo} src={item.logo} alt={item.name} key={index} />
								<Typography variant={'h3'}>
									{ item.name }
								</Typography>
							</Grid>
					))
				}
			</Grid>
		</React.Fragment>
	);
};

Games.propTypes = {
	history: PropTypes.object
};

export default withRouter(Games);
