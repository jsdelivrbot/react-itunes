import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import SearchBar from './components/searchbar';
import AlbumList from './components/album_list';
import AlbumListItem from './components/album_list_item';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			termResults: [],
			artist: ""
		};

		this.itunesSearch("beastie boys");
	}

		itunesSearch(searchTerm) {
			Axios.get('https://itunes.apple.com/search?term='+ searchTerm)
	 		  .then(function (res) {
	 		 	console.log(res.data.results);
	 		 	console.log(res.data.results[0].artistName);
			    this.setState({
			    	termResults: res.data.results,
			    	artist: res.data.results[0].artistName
			    });
			  })
			  .catch(function (err) {
			    console.log(err);
			  });
		}


	

	render() {
		return (
			<main>
				<SearchBar />
				<AlbumListItem artist = { this.state.termResults } />
			</main>
		);
	}
}
// Take these components generated HTML and put on the page (in the DOM.)
ReactDOM.render(<App />, document.querySelector('.container'));