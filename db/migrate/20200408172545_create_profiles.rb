class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :image
      t.float :reputation
      t.text :bio
      t.integer :number_of_dines
      t.integer :user_id

      t.timestamps
    end
  end
end
