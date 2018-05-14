import * as React from 'react'
import './App.css'
import { LoginForm } from './loginForm/LoginForm'
import { SignupForm } from './signupForm/signupForm'
import { UserDetails } from './userDetails/userDetails'
import { EmailConfirm } from './emailConfirm/emailconfirm'
import Button from 'material-ui/Button'


export interface Props {
  name: string;
  city?: string;
}

interface stateProps {
  currentPage: string
  token: string
  user?: any
}

class App extends React.Component<Props, object> {
  state: stateProps = {
    currentPage: 'login',
    token: ''
  }

  navigate(route: string) {
    this.setState({
      currentPage: route 
    })
  }

  saveToken(token: string) {
    this.setState({ token })
  }

  setUser(user: object) {
    this.setState({ user })
  }

  getComponent() {
    const {currentPage} = this.state
    switch (currentPage) {
      case "emailVerification":
        return <EmailConfirm 
          navigate={this.navigate.bind(this)} 
          token={this.state.token} 
        />
      case "userDetails":
        return <UserDetails 
          token={this.state.token} 
          user={this.state.user} 
        />
      case "login": 
        return <LoginForm 
          setUser={this.setUser.bind(this)} 
          saveToken={this.saveToken.bind(this)} 
          navigate={this.navigate.bind(this)} 
        />
      case "signup": 
        return <SignupForm 
          setUser = {this.setUser.bind(this)}
          saveToken={this.saveToken.bind(this)} 
          navigate={this.navigate.bind(this)} 
        />
    }
    return
  }

  render() {
    const top_strip = (
      <div className="flexed flexed_start top_strip"> 
        <div className="logo"> </div>
        <div> Don't have an account? </div>
        <div>
          <Button variant="raised" onClick={() => {this.navigate("signup")}} color="primary">
            Start Now
          </Button>
        </div>
      </div>
    )

    if (this.state.user && this.state.user.disabled && this.state.currentPage != 'emailVerification') {
      this.setState({currentPage: 'emailVerification'})
    }

    return (
      <div className="App">
        {top_strip}
        <div className="page_split">
          <div className="left">
            {this.getComponent()}
          </div>
          <div className="right">
            <div> Marketing Text </div>
            <div> Video </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;