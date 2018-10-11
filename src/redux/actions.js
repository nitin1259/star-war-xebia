import { getRequest } from "../api/api-requests";

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

export const fetchSearchDetail = (results) => {
    return{
        type: 'SEARCH_RECORDS',
        results
    }
}

export const fetchDataFromApi =(url) =>{
    // console.log('url is: ' + url)
    return (dispatch) =>{
        dispatch(isPlanetLoading(true));

        getRequest(url).then(res=>{
            dispatch(isPlanetLoading(false))
            return res;
        }).then(results =>{
            dispatch(fetchSearchDetail(results));
        }).catch(()=>{
            dispatch(planetHasError(true));
        })
    }

}