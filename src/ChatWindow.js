import React from 'react';
import PropTypes from 'prop-types';

import MessageList from './MessageList';
import InputWindow from './InputWindow';

class ChatWindow extends React.Component {

  sendMessage = message => {
		this.props.sendMessage(message);
  }

	render() {
		const {username, messages} = this.props;

		return (
			<div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>

        <ul className="message-list">
          {messages.map((message, index) => (
          	<MessageList key={index} username={username} message={message}/>
          ))}
        </ul>

        <InputWindow 
        	username={username}
        	sendMessage={this.sendMessage} 
        	handleInputChange={this.handleInputChange} 
        />	
      </div>			
		)
	}
}

ChatWindow.propTypes = {
	username: PropTypes.string.isRequired
}

export default ChatWindow