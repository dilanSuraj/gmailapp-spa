import React, { Component } from 'react';
import './App.css';
import SignIn from './components/signin';
import DefaultLayout from './shared/defaultLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import common from './utils/common';
import { ProtectedRoute } from './utils/protectedRoute';
import notificationAlertUtil from './utils/notificationManager'
import queryString from 'query-string'
import auth from './utils/auth';
import Axios from 'axios';
import Mails from './components/mails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    }
  }

  async componentWillMount() {
    const queryObj = queryString.parse(window.location.search);
    let code = queryObj.code
    if (window.location.pathname === "/redirect") {
      const queryObj = queryString.parse(window.location.search);
      let code = queryObj.code
      await Axios.post(`${common.BACKEND_API}${common.TOKEN_ENDPOINT}/`, {
        code: code
      },
        {
          headers: common.DEFAULT_HEADER_INFO
        }).then(res => {
          this.setState({
            token: res.data
          })
          auth.login(res.data);
          window.history.pushState({}, null, '/');
        }).catch(error => {
          notificationAlertUtil.customErrorAlert("Error occurred")
          window.history.pushState({}, null, '/');
        });
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin" name="SignIn Page" component={SignIn} />
            <ProtectedRoute exact path="/" name="Home" component={DefaultLayout} />
            <ProtectedRoute exact path="/mails" name="Mails" component={Mails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
