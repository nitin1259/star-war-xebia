const appState = {
    isLoading: true,
    hasError: false,
    people: {},
    planets: []
}

const starWarRecords = (state = appState, action) => {

    switch (action.type) {
        case 'PLANET_IS_LOADING':
            return Object.assign({}, state, { isLoading: action.isLoading });
        case 'PLANET_HAS_ERRO':
            return Object.assign({}, state, { hasError: action.hasError });
        case 'PEOPLE_RECORD':
            return Object.assign({}, state, { people: action.people });
        case 'PLANET_SEARCH_RECORDS':
            return Object.assign({}, state, { planets: action.planets });
        default:
            return state;

    }
}

export default starWarRecords;