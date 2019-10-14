class Api::ProductsController < ApplicationController

	# before_action :authenticate_user!

	def index
		q = params[:q]

		if q.blank?
			render status: 400, json: { error: 'Expected parameter `q` '}
		else
			render(status: 200, json: Product.where(["description LIKE ?", "%#{q}%"]).limit(100))
		end
	end

	def all
		products = Product.all.take(30)
		render json: products
	end

	def new
		product = Product.new 
	end

	def destroy
		Product.destroy(params[:id])
	end

	def create
		product = Product.new(product_params)
		product.save
		render json: product
	end

	def update
		product = Product.find(params[:id])
		product.update_attributes(product_params)
		render json: product
	end

	private

	def product_params
		params.require(:product).permit(:name, :description, :price, :user_id)
	end

end