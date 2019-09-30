class ProductsController < ApplicationController

	before_action :authenticate_user!

	def new
		@product = Product.new
	end

	def create
		@product = Product.new(product_params)
		@product.save
	end

	private

	def product_params
		params.require(:product).permit(:name, :description, :price, :user_id)
	end

end