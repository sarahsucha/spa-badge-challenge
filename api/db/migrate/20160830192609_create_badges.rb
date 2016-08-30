class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.text :description
      t.integer :total_votes
      t.integer :boot_id

      t.timestamps null: false
    end
  end
end
