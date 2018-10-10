import React, { Component } from 'react'


class Login extends Component{

    render(){
        return(
            <div>
                <form action="">
                    <div className="imgContainer">
                        <img src='img/img_starwar.png' alt="Star War Login" className="starWarImg"/>
                    </div>
                    <div className="container">
                        <label htmlFor="userName"><b>User Name</b></label>
                        <input type="text" placeholder="Enter User Name" name="userName" required />

                        <label htmlFor="pswd"><b>User Name</b></label>
                        <input type="password" placeholder="Enter Password" name="pswd"  required/>

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;