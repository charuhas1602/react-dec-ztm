import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: 'Andrei',
        lastName: 'Neaogie',
      },
      company: 'ZTM',
    };
  }
  render() {
    return <div className='App text-danger'>sss</div>;
  }
}

export default App;
