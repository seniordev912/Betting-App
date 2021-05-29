import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Drawer, Button, SvgIcon } from '@material-ui/core';
import {
	CostIcon,
	KandydaciIcon,
	KokpitIcon,
	ListaiprIcon,
	ListaOrkIcon,
	ListauslugIcon,
	LogzdarzenIcon,
	PowiadomieniaIcon,
	PunktyKwalifikacyjneIcon,
	RaportyIcon,
	SpecjalisciIcon,
	SzkoleniaIcon,
	UczestnicyIcon,
	UzytkownicyIcon,
	ZespolOrkIcon} from './svg/icons';

import storage from '../../../../utils/storage';
import { SidebarNav } from './components';
import { withRouter } from 'react-router-dom';
import useStyles from './style';
import { Alert } from 'components';

const Sidebar = props => {
	const { open, variant, history, onClose, className, staticContext, ...rest } = props;
	const [pages, setPages] = useState([]);
	const classes = useStyles();
	const items = [
		[
			{
				main_label: 'MENU GŁÓWNE'
			},
			{
				title: 'Kokpit',
				href: '/cockpit',
				icon: <KokpitIcon/>
			},
			{
				title: 'Kandydaci',
				href: '/candidates',
				icon: <KandydaciIcon/>
			},
			{
				title: 'Punkty kwalifikacyjne',
				href: '/qualification_points',
				icon: <PunktyKwalifikacyjneIcon/>
			},
			{
				title: 'Specjaliści',
				href: '/specialists',
				icon: <SpecjalisciIcon/>
			},
			{
				label: 'UCZESTNICY'
			},
			{
				title: 'Uczestnicy',
				href: '/participants',
				icon: <UczestnicyIcon/>
			},
			{
				title: 'Zespół ORK',
				href: '/ork_teams',
				icon: <ZespolOrkIcon/>
			},
			{
				title: 'Lista IPR',
				href: '/ipr_list',
				icon: <ListaiprIcon/>
			},
			{
				label: 'USŁUGI'
			},
			{
				title: 'Lista usług',
				href: '/service_list',
				icon: <ListauslugIcon/>
			},
			{
				title: 'Szkolenia',
				href: '/trainings',
				icon: <SzkoleniaIcon/>
			},
			{
				title: 'Powiadomienia',
				href: '/notifications',
				icon: <PowiadomieniaIcon/>
			},
			{
				label: 'FINANSE'
			},
			{
				title: 'Lista ORK',
				href: '/ork_list',
				icon: <ListaOrkIcon/>
			},
			{
				title: 'Zdefiniowane koszty usług',
				href: '/payments',
				icon: <CostIcon/>
			},
			{
				title: 'Raporty',
				href: '#',
				icon: <RaportyIcon/>,
				sub: [{
					title: 'Zestawienie zrealizowanych usług',
					href: '/reports_service',
				},
				{
					title: 'Raport finansowy',
					href: '/reports_financial',
				},
				{
					title: 'Raport sprawozdawczy z rekrutacji uczestników',
					href: '/reports_participant',
				},
				{
					title: 'Raport sprawozdawczy z działalności ośrodka',
					href: '/reports_center',
				},
				{
					title: 'Nadwykonania',
					href: '/reports_performance',
				}]
			},
			{
				label: 'USTAWIENIA SYSTEMOWE'
			},
			{
				title: 'Użytkownicy systemu',
				href: '/users',
				icon: <UzytkownicyIcon/>
			},
			{
				title: 'Log zdarzeń',
				href: '/logs',
				icon: <LogzdarzenIcon/>
			},
		],
		[
			{
				title: 'Kokpit',
				href: '/cockpit',
				icon: <KokpitIcon/>
			},
			{
				title: 'Kandydaci',
				href: '/candidates',
				icon: <KandydaciIcon/>
			},
			{
				title: 'Punkty kwalifikacyjne',
				href: '/qualification_points',
				icon: <PunktyKwalifikacyjneIcon/>
			},
			{
				title: 'Specjaliści',
				href: '/specialists',
				icon: <SpecjalisciIcon/>
			},
			{
				label: 'UCZESTNICY'
			},
			{
				title: 'Uczestnicy',
				href: '/participants',
				icon: <UczestnicyIcon/>
			},
			{
				title: 'Zespół ORK',
				href: '/ork_teams',
				icon: <ZespolOrkIcon/>
			},
			{
				title: 'Lista IPR',
				href: '/ipr_list',
				icon: <ListaiprIcon/>
			},
			{
				label: 'USŁUGI'
			},
			{
				title: 'Lista usług',
				href: '/service_list',
				icon: <ListauslugIcon/>
			},
			{
				title: 'Szkolenia',
				href: '/trainings',
				icon: <SzkoleniaIcon/>
			},
			{
				label: 'FINANSE'
			},
			{
				title: 'Lista ORK',
				href: '/ork_list',
				icon: <ListaOrkIcon/>
			},
			{
				title: 'Zdefiniowane koszty usług',
				href: '/payments',
				icon: <CostIcon/>
			},
			{
				title: 'Raporty',
				href: '#',
				icon: <RaportyIcon/>,
				sub: [{
					title: 'Zestawienie zrealizowanych usług',
					href: '/reports_service',
				},
				{
					title: 'Raport finansowy',
					href: '/reports_financial',
				},
				{
					title: 'Raport sprawozdawczy z rekrutacji uczestników',
					href: '/reports_participant',
				},
				{
					title: 'Raport sprawozdawczy z działalności ośrodka',
					href: '/reports_center',
				},
				{
					title: 'Nadwykonania',
					href: '/reports_performance',
				}]
			},
		],
		[
			{
				title: 'Kokpit',
				href: '/cockpit',
				icon: <KokpitIcon/>
			},
			{
				title: 'Kandydaci',
				href: '/candidates',
				icon: <KandydaciIcon/>
			},
		]
	];
	useEffect(() => {
		let roleList = localStorage.getItem('role').split(',');
		let role = 3;
		for (let i = 0; i < roleList.length; i ++) {
			if (parseInt(roleList[i]) < role) {
				role = parseInt(roleList[i]);
			}
		}
		setPages(items[role - 1]);
	}, []);


	return (
		<Drawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div
				{...rest}
				className={clsx(classes.root, className)}
			>
				<div className={classes.logoBlock}>
					<img src="/images/logos/logo.png" className={classes.main_logo} aria-hidden="true" alt="Logo Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych"/>
				</div>
				<SidebarNav
					className={classes.nav}
					pages={pages}
					history={history}
				/>
			</div>
		</Drawer>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	variant: PropTypes.string.isRequired
};

export default withRouter(Sidebar);
