class Transaction < ApplicationRecord
validates :user_id, :coin_id, :price, :num_coins, :order_type, presence: true

  belongs_to :user
  belongs_to :coin
  
end

