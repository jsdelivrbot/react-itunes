import React from 'react';

const AlbumList = (props) => {
	console.log(props);
	return (
		<h1>{props.artist}</h1>
	)
}

export default AlbumList;