class V1::ProductsController < ApplicationController

	# before_action :authenticate_user!

	def index
		q = params[:q]

		if q.blank?
			render status: 400, json: { error: 'Expected parameter `q` '}
		else
			render(status: 200, json: Product.where(["description LIKE ?", "%#{q}%"]).limit(100))
		end
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