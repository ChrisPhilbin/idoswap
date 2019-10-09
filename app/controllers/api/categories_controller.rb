class Api::CategoriesController < ApplicationController

	def index
		categories = Category.all
		render json: categories
	end

	def new
		category = Category.new
	end

	def destroy
		Category.destroy(params[:id])
	end

	def create
		category = category.new(category_params)
		category.save
		render json: category
	end

	def update
		category = Category.find(params[:id])
		category.update_attributes(category_params)
		render json: category
	end	

	private

		def category_params
			params.require(:category).permit(:name, :description)
		end

end