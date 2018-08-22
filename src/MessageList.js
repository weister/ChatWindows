import React from 'react';
import PropTypes from 'prop-types';

class MessageList extends React.Component {
	render() {
		const {username, message} = this.props;

		return (            
			<li
        className={
          message.username === username 
          	? 'message sender' 
          	: 'message recipient'
        }
      >
        <p>{`${message.username}: ${message.text}`}</p>
      </li>
    )
	}
}

MessageList.propTypes = {
	username: PropTypes.string.isRequired,
	message: PropTypes.object.isRequired
}

export default MessageList