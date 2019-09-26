class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :coin_id, null: false
      t.integer :num_coins, null: false
      t.float :price, null: false
      t.string :order_type, null: false
      t.datetime :transaction_date, null: false

      t.timestamps
    end
    add_index :transactions, :user_id
    add_index :transactions, :coin_id
  end
end
