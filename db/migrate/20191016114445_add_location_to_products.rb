class AddLocationToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :location, :string
  end
end