// Filename - Progress_bar.js

import React from 'react'

const Progress_bar = ({progress}) => {
	
	const Parentdiv = {
		height: 13,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		marginRight: 0,
		marginLeft: 0,
        marginBottom: 42,
        marginTop: 42
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: 'yellowgreen',
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		fontWeight: 500,
        padding: 15,
        color: 'white',
        position: 'absolute',
        marginTop: '5'
	}
	
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
