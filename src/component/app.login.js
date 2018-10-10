import React, { Component } from 'react'
import { getRequest } from '../api/api-requests';
import { base_url } from '../config/app.config';
import { fetchPeopleData } from '../redux/actions'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            isNotValid: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    doLogin(e) {
        e.preventDefault();
        let url = `${base_url}people/?search=${this.state.userName}`

        getRequest(url).then(res => {
            const result = res && res.results && res.count === 1 ? res.results[0] : undefined;
            if (result && result.birth_year === this.state.password) {
                this.setState({ isNotValid: false })
                this.props.fetchPeopleData(result);
                alert("Valid login : " + this.state.userName)
            } else {
                this.setState({ isNotValid: true })
            }
        })
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'userName':
                this.setState({ userName: event.target.value })
                return;
            case 'pswd':
                this.setState({ password: event.target.value })
                return;
            default:
                console.log('no Match fount');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.doLogin.bind(this)}>
                    <div className="imgContainer">
                        <img src='img/img_starwar.png' alt="Star War Login" className="starWarImg" />
                    </div>
                    <div className={this.state.isNotValid ? 'imgContainer' : 'hidden'}>
                        <span style={{ color: 'red', font: 'bold' }}>Invalid User Name or Password</span>
                    </div>
                    <div className="container">
                        <label htmlFor="userName"><b>User Name</b></label>
                        <input type="text" required placeholder="Enter User Name" name="userName" value={this.state.userName} onChange={this.handleChange} />

                        <label htmlFor="pswd"><b>User Name</b></label>
                        <input type="password" required placeholder="Enter Password" name="pswd" value={this.state.password} onChange={this.handleChange} />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchPeopleData: (item) => dispatch(fetchPeopleData(item))
    };
}
export default connect(null, mapDispatchToProps)(Login);