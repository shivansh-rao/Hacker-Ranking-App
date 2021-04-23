import * as React from 'react';
import './App.css';
import Home from './components/Home/home'
import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HackersList from './components/HackerList/HackersList';
import HackerDetail from './components/HackerDetails/HackerDetail';
import { Admin, Resource } from 'react-admin';
import authProvider from './services/authProvider';
import userList from './services/userList';
import dataProvider from './services/dataProvider';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  return (
    <div>

      <Router>
        <div className="App">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hacker-list" exact component={HackersList} />
            <Route path="/hacker/statistics" exact component={Statistics} />
            <Route path="/hacker/:id" exact component={HackerDetail} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/admin-panel" exact>
              <Admin
                title="HackerRank Admin Panel"
                dataProvider={dataProvider}
                authProvider={authProvider}
              >{(auth) =>
                [
                  <Resource name="hackers" list={userList} />
                ]
                }
              </Admin>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
