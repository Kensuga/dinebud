class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :location
      t.datetime :schedule_time
      t.boolean :active
      t.integer :user_id
      t.integer :partner_id

      t.timestamps
    end
  end
end
