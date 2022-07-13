import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      user: []
    }
  }

  getUser = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      user: response.data
    })
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const users = this.state.user;
    return (
      <div className='p-5'>
        {users.map(us => {
          return (
            <p>My name is {us.name}</p>
          )
        })}
      </div>
    )
  }
}

export default App;
