import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWindow from './ChatWindow';

const users = [{ username: 'ZhuZhu' }, { username: 'Wei' }];

class App extends Component {
  state = {
    messages: []
  }

  sendMessage = message => {
    const {username, text} = message;
    this.setState(previousState => ({
      messages: [...previousState.messages, {username: username, text: text}]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={this.state.messages}
              sendMessage={this.sendMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
