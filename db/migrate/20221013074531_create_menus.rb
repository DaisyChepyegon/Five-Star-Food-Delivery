class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
