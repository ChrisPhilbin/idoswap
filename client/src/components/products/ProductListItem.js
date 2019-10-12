import React from 'react'

const DisplayProducts = ({ description, name, price}) => (
	<div>
		<h3>{name}</h3>
		<p>{description}</p>
		<p>{price}</p>
	</div>
)
export default DisplayProducts