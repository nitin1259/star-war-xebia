import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDataFromApi } from '../redux/actions';


class Planet extends Component {
    constructor(props) {
        super(props)

        this.nextSearch = this.nextSearch.bind(this)
    }

    displayPlanet(planets) {
        
        return planets.map((ele, i) => {
            const classes = ele.population > 1000000000 ? 'planetRow populatedDiv': 'planetRow'
            return (<div className={classes} key={i}>
                <div className="innerRowDiv">{ele.name}</div>
                <div className="innerRowDiv">{ele.rotation_period}</div>
                <div className="innerRowDiv">{ele.diameter}</div>
                <div className="innerRowDiv">{ele.population}</div>
                <div className="innerRowDiv">{ele.url}</div>
            </div>)
        })
    }

    nextSearch(evt) {
        console.log(evt.taret.name);
    }

    render() {
        const [count, results] = [this.props.starWarRecords.results.count, this.props.starWarRecords.results]
        const [prev, next, planets] = [results.previous, results.next, results.results]
        return (
            <div>
                <div className="planetRow">
                    <div className="innerRowDivheader">Name</div>
                    <div className="innerRowDivheader">Rotation Period</div>
                    <div className="innerRowDivheader">Diameter</div>
                    <div className="innerRowDivheader">Population</div>
                    <div className="innerRowDivheader">Where to find</div>
                </div>
                {this.displayPlanet(planets)}

                <div className="planetRow">
                    <input className={prev ? 'navBtn' : 'hidden'} type="submit" name="prev" value="Prev" onClick={() => { this.props.nextSearch(prev) }} />
                    <div style={{ color: 'green', margin: 'auto' }}>{`Total record found for search: ${count}`}</div>
                    <input className={next ? 'navBtn' : 'hidden'} type="submit" name="next" value="Next" onClick={() => { this.props.nextSearch(next) }} />
                </div>
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
        nextSearch: (url) => dispatch(fetchDataFromApi(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Planet);
