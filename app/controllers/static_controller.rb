class StaticController < ApplicationController

	def index
		render json: {text: "hello"}
	end

end