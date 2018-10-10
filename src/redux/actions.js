export const isPlanetLoading = (bool) => {
    return {
        type: 'PLANET_IS_LOADING',
        isLoading: bool
    }
}

export const planetHasError = (bool) => {
    return{
        type: 'PLANET_HAS_ERRO',
        hasError: bool
    }
}

export const fetchPeopleData = (people) => {
    return{
        type: 'PEOPLE_RECORD',
        people

    }
}

export const fetchPlanetsDetail = (planets) => {
    return{
        type: 'PLANET_SEARCH_RECORDS',
        planets
    }
}