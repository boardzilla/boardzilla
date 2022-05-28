import React, { Component } from 'react';

export default ({error}) => {
	return <div style={{margin: "auto", width: "50%", padding: "10px"}}><h1>An error was encountered while running your game</h1><h2>{error.message}</h2><pre>{error.stack}</pre></div>
}