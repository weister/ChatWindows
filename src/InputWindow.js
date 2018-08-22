import React from 'react';

class InputWindow extends React.Component {
  state = {
    username: '',
    text: ''
  }

  isDisabled = () => {
    const {username, text} = this.state;
    return username === '' || text === '';
  };	

  handleInputChange = event => {
  	event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      username: name,
      text: value
    })
  }

	sendMessage = event => {
		event.preventDefault();
		this.props.sendMessage(this.state);
		this.setState({username: '', text: ''})
	}

	render() {
		const {username} = this.props;
		return (
      <div>
        <form className="input-group" onSubmit={this.sendMessage}>
          <input 
            type="text" 
            className="form-control"
            name={username}
            placeholder="Enter your message..."
            value={this.state.text}
            onChange={this.handleInputChange}
          />

          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>			
		)
	}
}

export default InputWindow