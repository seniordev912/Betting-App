


export const modelPropertyLabel = (modelName, property) => {
	const labels = {
		'universal': {
			id:         'ID',
			updated_at: 'Data modyfikacji',
		},
		'App\\Models\\QualificationPoint': {
			name:       'Punkt kwalifikacyjny',
			type:       'Typ',
			ambassador: 'Przypisani Ambasadorzy',
		},
		'App\\Models\\Candidate': {
			name:               'Imię kandydata',
			surname:            'Nazwisko kandydata',
			qualificationPoint: 'Punkt kwalifikacyjny',
			stage:              'Etap rekrutacji',
		},
		'App\\Models\\OrkList': {
			name:                'Nazwa ośrodka',
		},
		'App\\Models\\OrkTeam': {
			name:                'Imię i nazwisko',
			rehabitation_center: 'ORK',
			specialization:      'Specjalizacja',
		},
		'App\\Models\\Payment': {
			name:                'Nazwa kosztu',
			value:               'Cena jednostkowa',
			rehabitation_center: 'Koszt dla ORK',
			service:             'Usługa',
		},
		'App\\Models\\ServiceList': {
			number: 'Numer',
			name:   'Nazwa',
			module: 'Moduł',
			unit:   'Minimalny zakres usługi',
		},
		'App\\Models\\Specialist': {
			name:                'Imię i nazwisko',
			qualification_point: 'Punkt kwalifikacyjny',
			specialty:           'Specjalność',
		},
		'App\\Models\\User': {
			name:            'Nazwa użytkownika (login)',
			id_role:         'Rola',
			email:           'E-mail',
			activate_status: 'Aktywny',
		},
		'App\\Models\\Log': {
			user:  'Użytkownik',
			role:  'Rola',
			date:  'Data',
			event: 'Czynność',
		},
		// 'App\\Models\\TTTTTT': {
		//   xxxxxx: 'yyyyyy',
		//   xxxxxx: 'yyyyyy',
		//   xxxxxx: 'yyyyyy',
		//   xxxxxx: 'yyyyyy',
		//   xxxxxx: 'yyyyyy',
		//   xxxxxx: 'yyyyyy',
		// },
	}
	const model = labels[modelName] || labels[`App\\Models\\${modelName}`] || null
	return (model && model[property]) || labels['universal'][property] || '';
}

export const modelName = (modelName) => {
	const names = {
		'App\\Models\\QualificationPoint': 'Qualification point',
		'App\\Models\\Candidate':          'kandydat',
		'App\\Models\\OrkTeam':            'OrkTeam',
		'App\\Models\\Payment':            'Zdefiniowane koszta usług',
		'App\\Models\\ServiceList':        'Usługa',
		'App\\Models\\Specialist':         'Specjalista',
		'App\\Models\\User':               'Użytkownik',
	}
	return names[modelName] || names[`App\\Models\\${modelName}`] || '';
}

// TODO: provide model lists for general function
// const modelPropertyFormatter = (modelName, property) => {
// 	const formatters = {
// 		'App\\Models\\QualificationPoint': {
// 		  type:       value => getNameFromList(value, typeListByID),
// 		  ambassador: value => getNamesFromList(value, ambassadorListByID),
// 		},
// 		'App\\Models\\Candidate': {
// 		  stage:      value => getNameFromList(value, stageListByID),
// 		},
// 		'App\\Models\\OrkTeam': {
// 		  rehabitation_center: value => getNameFromList(value, rehabitationCenterListByID),
// 		  specialization:      value => getNameFromList(value, specializationListByID),
// 		},
// 		'App\\Models\\Payment': {
// 		  rehabitation_center: value => getNameFromList(value, rehabitationCenterListByID),
// 		  service: value => getNameFromList(value, serviceListListByID),
// 		},
// 		'App\\Models\\Specialist': {
// 		  qualification_point: value => getNameFromList(value, qualificationPointListByID),
// 		  specialty:           value => getNameFromList(value, specialtyTypeListByID),
// 		},
// 		'App\\Models\\User': {
// 		  role: value => getNameFromList(value, roleListByID),
// 		},
// 	}

// 	const model = formatters[modelName] || formatters[`App\\Models\\${modelName}`] || null
// 	return (model && model[property]) || ((x) => x);
// }
