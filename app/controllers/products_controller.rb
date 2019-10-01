class ProductsController < ApplicationController

	# before_action :authenticate_user!

	def index
		products = Product.all #need to eventually restrict this to only return products owned by current user
		render json: products
	end

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