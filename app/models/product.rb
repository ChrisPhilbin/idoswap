class Product < ApplicationRecord

	belongs_to :user
	belongs_to :category
  def created_at
    attributes['created_at'].strftime("%b %d, %Y")
  end	
end
