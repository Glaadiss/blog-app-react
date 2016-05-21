class CreateSubscribes < ActiveRecord::Migration
  def change
    create_table :subscribes do |t|
      t.integer :following
      t.integer :followed

      t.timestamps null: false
    end
  end
end
