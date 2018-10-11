import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Home extends Component {

    render() {
        return (
            <div className="navHeader">                
                <NavLink to="/login">Login page</NavLink>
                <NavLink to="/search">Search page</NavLink>

            </div>
        )
    }
}

export default Home;