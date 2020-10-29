import React , {Component} from 'react'

var ID_TOKEN = ''

class Dashboard extends Component {
    state = {
        isLoaded: false
    }

    insertGapiScript() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () => {
            this.loadingauth2()
        }
        document.body.appendChild(script)
    }

    loadingauth2 () {
        window.gapi.load('auth2', function() {
            const exisitingAuthInstance = window.gapi.auth2.getAuthInstance()

            let currUserPromise
            if (exisitingAuthInstance) {
                currUserPromise = Promise.resolve(exisitingAuthInstance.currentUser.get())
            } else {
                currUserPromise = window.gapi.auth2.init({
                    client_id: '958511751255-tq0dgsvsilr2na11hiih0tmi0d3t3nig.apps.googleusercontent.com'
                }).then (res => {
                    return res.currUser.get()
                })
            }

            return currUserPromise
                .then((currUser) => {
                    return currUser.reloadAuthResponse()
                })
                .then((newAuthResponse) => {
                    localStorage.setItem(ID_TOKEN, newAuthResponse.id_token)
                })
        })
    }

    componentDidMount() {
       this.insertGapiScript()
    }

    sigout(){
        var auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2.isSignedIn.get()) {
            auth2.signOut().then(() => {
                console.log('signed Out')
            }).then(() => {
                localStorage.setItem(ID_TOKEN, null)
            })
        }else {
            auth2.signIn();
        }

    }
    
    
    render() {


        const authInstance = window.gapi.auth2.getAuthInstance()
        const currUser = authInstance.currentUser.get()
        const profile = currUser.getBasicProfile()
        const email = profile.getEmail()
        const name = profile.getName()
        const imageUrl = profile.getImageUrl()
        console.log(authInstance)
        return (
            <div>{email}
            <br />
                <img src =  {imageUrl} alt = "img"/>
                {name}
               
                    <button onClick = {this.sigout}>Sign Out</button>
                    <br />
                    
                
                
            </div>
            
        )
    
    }
}


export default Dashboard