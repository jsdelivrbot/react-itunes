import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: ''};
	}
	render() {
		console.log(this.state.searchTerm);
		return (
			<div>
				<input 
				value={this.state.searchTerm} 
				onChange={ event => this.OnInputChange(event.target.value)}
				/>
			</div>
			);
	}

	OnInputChange(searchTerm) {
		 this.setState({searchTerm})
		 console.log(this.state.searchTerm);
		 this.props.onChange(searchTerm);
	}
}

export default SearchBar;