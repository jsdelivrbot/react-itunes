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
			searchResults: []
		};
		
		//this.iTunesSearch("Radiohead");
	}

		iTunesSearch(searchTerm) {
			var self=this;
			Axios.get('https://itunes.apple.com/search?term=' + searchTerm + '&entity=album')
	 		  .then(function (res) {
	 		  	console.log(res.data.results);
			    self.setState({
			    	searchResults: res.data.results[0],
			    	searchTerm: searchTerm
			    });
			  })
			  .catch(function (err) {
			    console.log(err);
			  });
		}
	
	render() {
		const searchTerm = this.state.searchTerm;
		
		return (
			<main>
				<SearchBar onChange={this.iTunesSearch} />
				<h3>Search Results for: {this.state.searchTerm}</h3>
				<AlbumListItem album = { this.state.searchResults }  />
			</main>
		);
	}
}
// Take these components generated HTML and put on the page (in the DOM.)
ReactDOM.render(<App />, document.querySelector('.container'));