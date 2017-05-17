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
			var self=this;
			Axios.get('https://itunes.apple.com/search?term='+ searchTerm+"&entity=album")
	 		  .then(function (res) {
	 		  	console.log(res.data.results);
			    self.setState({
			    	termResults: res.data.results[0],
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
				<AlbumListItem artist = { this.state.termResults }  />
			</main>
		);
	}
}
// Take these components generated HTML and put on the page (in the DOM.)
ReactDOM.render(<App />, document.querySelector('.container'));