import React, { Component } from 'react';

const AlbumListItem = ({artist}) => {
	console.log("artist = "+artist);
	return (
		<div>
			<h1>{artist.artistName}</h1>
			<h4>{artist.collectionName}</h4>
			<img src={artist.artworkUrl100}/>
			<h6>{artist.primaryGenreName} / {artist.copyright} </h6>
		</div>
		)


}

export default AlbumListItem;