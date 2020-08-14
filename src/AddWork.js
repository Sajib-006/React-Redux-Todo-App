import React, { Component } from "react";

class AddWork extends Component {
  state = {
    body: "",
  };
  handleChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addWork(this.state);
    this.setState({
      body: "",
    });
  };
  render() {
    return (
      <div className=' collection-item'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'> Add todo:</label>
          <input
            type='text'
            id='name'
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button variant='secondary' size='lg' block>
            <center>+</center>
          </button>
        </form>
      </div>
    );
  }
}

export default AddWork;
