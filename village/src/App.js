import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs', this.state.smurfs)
    .then(response => this.setState({smurfs: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
         <header>
          <h1>Welcome to the Smurf Village!</h1>
          <h3>Please come in and visit the Smurfs here:</h3>
          <Link to='/smurfs'>Smurf Village</Link>
          <h3>Or if you would like to create a little blue freak, Click Here!</h3>
          <Link to='/smurfform'>New Smurf</Link>
        </header>

        <Route path='/smurfform' component={SmurfForm} />
        <Route path='/smurfs' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
} 

export default App;
