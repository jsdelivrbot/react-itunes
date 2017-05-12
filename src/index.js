import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import SearchBar from './components/searchbar';


class App extends Component {

	constructor(props) {
		super(props);
		this.state= { 
			term: [ ]
		};

		this.itunesSearch('Beastie Boys')
	}

	itunesSearch(term) {
		Axios.get('https://itunes.apple.com/search?term='+term)
 		 .then(function (res) {
		    console.log(res);
		  })
		  .catch(function (err) {
		    console.log(err);
		  });
	}


	render() {
		return (
		<SearchBar />
		);
	}
}
// Take these components generated HTML and put on the page (in the DOM.)
ReactDOM.render(<App />, document.querySelector('.container'));