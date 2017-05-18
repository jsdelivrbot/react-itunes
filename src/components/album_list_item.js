import React, { Component } from 'react';

const AlbumListItem = ({album}) => {
	console.log("artist = "+album);
	// if(!artist) {
	// 	return (
	// 		<h3>Loading...</h3>
	// 		)
	// }
	return (
		<div>
			<h1>{album.artistName}</h1>
			<h4>{album.collectionName}</h4>
			<img src={album.artworkUrl100}/>
			<h6>{album.primaryGenreName}</h6>
			<h6>{album.copyright} </h6>
		</div>
		)


}

export default AlbumListItem;