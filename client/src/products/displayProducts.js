export const displayProducts = () => {

	return(
		{products.map(product => (
			<b>{product.name}</b><br />
			{product.description}<br />
			Asking price: {product.price}
		))}
	)

}