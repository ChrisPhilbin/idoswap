class Products < ActiveRecord::Migration[5.2]
  def change
  	create_table :products do |t|
  		t.string :name
  		t.text :description
  		t.integer :price
  		t.integer :user_id
  		t.integer :bought_by
  		t.integer :order_id
  	end
  end
end
