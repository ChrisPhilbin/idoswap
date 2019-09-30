class Order < ApplicationRecord

	belongs_to :user
	belongs_to :product

	def new
		@order = Order.new
	end

	def create
		@order = Order.new(order_params)
		@order.save
	end

	private

	def order_params
		params.require(:order).permit(:user_id, :product_id, :completed)
	end
end
