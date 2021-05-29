/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, Fragment, useState, } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, Typography, Collapse } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
	root: {},
	item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	label: {
		padding: '16px 32px',
		justifyContent: 'flex-start',
		color: theme.palette.sidebar_title_color,
		fontFamily: 'roboto',
		fontSize: '0.8125em'
	},
	title: {
    width: '180px'
  },
	button: {
		padding: '16px 32px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: 400,
		fontSize: '0.8750em',
		color: theme.palette.sidebar_color,
		lineHeight: '1em',
		'& path': {
			fill: theme.palette.sidebar_title_color,
		},
		'&:hover': {
			backgroundColor: theme.palette.green,
			color: theme.palette.sidebar_hover_color,
			fontWeight: 400,
			borderRadius: '0px',

			'& $icon': {
				color: theme.palette.sidebar_hover_color,
				'& path': {
					fill: theme.palette.sidebar_hover_color,
				}
			},
		},
	},
	icon: {
		color: theme.palette.sidebar_color,
		width: 20,
		height: 20,
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(3),
		backgroundRepeat: 'no-repeat',

		'&:hover': {
			color: theme.palette.sidebar_hover_color,
			'& path': {
				fill: theme.palette.sidebar_hover_color,
			}
		},
	},
	active: {
		fontWeight: 400,
		'& path': {
			fill: theme.palette.sidebar_hover_color,
		},
		'& $icon': {
			color: theme.palette.sidebar_hover_color,
		},
		backgroundColor: theme.palette.green,
		color: theme.palette.sidebar_hover_color,
		borderRadius: '0px'
	},
	active_sub: {

	},
	sub_list: {
    padding: '0px'
  },
	button_sub: {
    padding: '20px 16px 20px 30px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: 400,
		fontSize: '0.8750em',
		// color: theme.palette.sidebar_color,
		lineHeight: '1em',
		'& path': {
			fill: theme.palette.sidebar_title_color,
		},
		'&:hover': {
			backgroundColor: theme.palette.green,
			color: theme.palette.sidebar_hover_color,
			fontWeight: 400,
			borderRadius: '0px',

			'& $icon': {
				color: theme.palette.sidebar_hover_color,
				'& path': {
					fill: theme.palette.sidebar_hover_color,
				}
			},
		},
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
	<div
		ref={ref}
		style={{ flexGrow: 1 }}
	>
		<RouterLink {...props} />
	</div>
));

const SidebarNav = props => {
	const { pages, className, history, ...rest } = props;
  const [open, setOpen] = useState(false);
  const handleClick = (page) => {
    if (page.sub) {
      setOpen(!open)
    } else {
      history.push(page.href);
    }
  }
	const classes = useStyles();

	return (
		<List
			{...rest}
			className={clsx(classes.root, className)}
		>
			{pages.map((page, index) => (
				page.main_label ?
					<Typography key={index} variant="h2" className={classes.label}>
						{page.main_label}
					</Typography>
					:
					page.label ?
						<Typography key={index} variant="h3" className={classes.label}>
							{page.label}
						</Typography>
						:
						(
							<Fragment key={index}>
								<ListItem
									className={classes.item}
									key={index}
									disableGutters
									key={page.title}
									onClick={() => handleClick(page)}
								>
									<Button
										activeClassName={!page.sub ? classes.active : classes.active_sub}
										className={classes.button}
										component={CustomRouterLink}
										to={page.href}
									>
										<SvgIcon className={classes.icon}>
											{page.icon}
										</SvgIcon>
										{/* <div  style={{backgroundImage: `url("${page.icon}")`,backgroundColor: 'transparent'}}></div> */}
										<div className={classes.title}>
											{page.title}
										</div>
										{
                    page.sub ?
                      open ? <ExpandLess /> : <ExpandMore />
                    :
                      <></>
                  	}
									</Button>
								</ListItem>
								{
									page.sub ?
										<Collapse in={open} timeout="auto" unmountOnExit>
											<List className={classes.sub_list}>
												{
													page.sub.map((item, index) => (
														<ListItem
															key={index}
															disableGutters
															className={classes.item}
														>
															<Button
																activeClassName={classes.active}
																className={classes.button_sub}
																component={CustomRouterLink}
																to={item.href}
															>
																<div className={classes.icon}>{item.icon}</div>
																{/* <div className={classes.icon}>{item.icon}</div> */}
																<div className={classes.title}>
																	{item.title}
																</div>
															</Button>
														</ListItem>
													))
												}
											</List>
										</Collapse>
										:
										<></>
								}
							</Fragment>
						)
			))}
		</List>
	);
};

SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
};

export default SidebarNav;
