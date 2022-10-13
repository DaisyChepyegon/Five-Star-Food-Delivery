class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :reviews
      t.integer :restaurant_id
      t.integer :menu_id

      t.timestamps
    end
  end
end
