import React , { Component } from "react"
import classes from "./login.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "../contacts/contacts"



class Login extends Component {

    state = {
        isSignedIn: null,
    };

    insertGapiScript() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () => {
            this.initializeGoogleSignIn()
        }
        document.body.appendChild(script)
    }

    initializeGoogleSignIn() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '958511751255-tq0dgsvsilr2na11hiih0tmi0d3t3nig.apps.googleusercontent.com',
                cookie_policy: 'single_host_origin'
            }).then(() => {
                const authInstance = window.gapi.auth2.getAuthInstance()
                const isSignedIn = authInstance.isSignedIn.get()
                this.setState({isSignedIn})
                authInstance.isSignedIn.listen(isSignedIn => {
                    this.setState({isSignedIn})
                })

            })
            console.log('API inited')
        })
       
    }

    ifUserSignedIn(Component) {
        if (this.state.isSignedIn == null) {
            return (
                <p></p>
            )
        }
        return this.state.isSignedIn ?
              <Component />: <LoginPage />
    }
    componentDidMount() {
        console.log('Loading....!!')
        this.insertGapiScript();   
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" render = {()=>this.ifUserSignedIn(Dashboard)}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}


class LoginPage extends Component {
    componentDidMount() {
        window.gapi.load('signin2',() => {
            window.gapi.signin2.render('login-button')
        })
    }

    render() {
        return (
            <div>
                <div className = {classes.Rectangle}>
                    <img className = {classes.img} src =  "/image.png" alt = "" />
                    <p className = {classes.para}>Sign in with Google</p>
                    <input className  = {classes.email} type = "text" placeholder = "Email"/>
                    <input className  = {classes.password} type = "text" placeholder = "Password" />
                    <div id = "login-button" className =  {classes.button} style = {{width: '220px'}}></div>
                </div>
            </div>
        )
    }
}




export default Login