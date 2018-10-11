import React, { Component } from 'react'
import { planet_url } from '../config/app.config';
import { fetchDataFromApi } from '../redux/actions';
import { connect } from 'react-redux'
import Planet from './app.planet';

class SearchPlanet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.fetchPlanetDataFromApi = this.fetchPlanetDataFromApi.bind(this)
    }

    handleChange(evt) {
        this.setState({ searchText: evt.target.value })
        this.fetchPlanetDataFromApi(evt.target.value)
    }

    fetchPlanetDataFromApi(search) {
        let url = `${planet_url}?search=${search}`
        this.props.fetchPlanetData(url);
    }

    ShowPlanetRecords() {
        if (this.props.starWarRecords.isLoading) {
            
            return this.state.searchText.length > 0 ? (<div className="planetRow">Loding...</div>) :(<div className="planetRow">do some search...</div>)
        }
        else if (this.props.starWarRecords.hasError) {
            return (<div className="planetRow">Error while searching...</div>)
        } else if (this.props.starWarRecords.results && this.props.starWarRecords.results.results){
            return (<div>
                <Planet />
            </div>)
        }else{
            
        }
    }

    render() {
        return (
            <div>
                <div className="searchContainer">
                    <label htmlFor="search"><b>Search</b> </label>
                    <input type='text' name="search" placeholder='search' value={this.state.searchText} onChange={this.handleChange} />
                </div>
                {this.ShowPlanetRecords()}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        starWarRecords: state.starWarRecords
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlanetData: (url) => dispatch(fetchDataFromApi(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);