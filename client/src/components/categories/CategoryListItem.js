import React from 'react'

const DisplayCategories = ({ description, name}) => (
	<div>
		<h3><b>{name}</b></h3>
		<p>{description}</p>
	</div>
)
export default DisplayCategories