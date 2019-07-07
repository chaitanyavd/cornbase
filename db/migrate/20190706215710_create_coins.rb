class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name, null: false 
      t.string :ticker, null: false 

      t.timestamps
    end

    add_index :coins, :ticker, unique: true
  end
end
