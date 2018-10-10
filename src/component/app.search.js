import React, { Component } from 'react'
import { base_url } from '../config/app.config';

class SearchPlanet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt){
        this.setState({searchText: evt.target.value})
    }

    componentDidMount() {
        let url = `${base_url}planets/?search=${this.state.userName}`
    }

    render() {
        return (
            <div className="searchContainer">
                <label htmlFor="search"><b>Search</b> </label>
                <input type='text' name="search" placeholder='start searching ...' value={this.state.searchText} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default SearchPlanet;