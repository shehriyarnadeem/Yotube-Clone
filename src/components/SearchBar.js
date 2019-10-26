import React from 'react';
import { Paper, TextField } from '@material-ui/core';
class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onSubmit } = this.props;
    console.log(searchTerm);
    onSubmit(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handleChange}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
