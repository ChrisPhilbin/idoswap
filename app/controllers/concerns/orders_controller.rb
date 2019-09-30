class OrdersController < ApplicationController

	before_action :authenticate_user!

	def new
		@order = Order.new
	end

	def create
		@order = Order.new(order_params)
		@order.save
	end

	private

	def order_params
		params.require(:order).permit(:user_id, :product_id)
	end
