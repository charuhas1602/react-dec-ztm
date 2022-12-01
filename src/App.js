import logo from './logo.svg';
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
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hi {this.state.name.firstName} {this.state.name.lastName}, I'm
            learning {this.state.company}
          </a>
          <button
            //setState happens asynchronly
            onClick={() => {
              this.setState(
                (state, props) => {
                  return { name: { firstName: 'Charuhas', lastName: 'Patil' } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
