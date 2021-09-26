import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {


  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="192717435098-iilkuqrb38d3a48p295pi79ghsrof6q0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
        
      </div>
    )
  }
}

export default App
