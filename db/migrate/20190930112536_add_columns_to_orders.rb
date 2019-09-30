class AddColumnsToOrders < ActiveRecord::Migration[5.2]
  def change
  	add_column :orders, :product_id, :integer
  	add_column :orders, :buyer_id, :integer
  	add_column :orders, :sold_by, :integer
  end
end
