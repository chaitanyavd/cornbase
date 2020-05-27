class Coin < ApplicationRecord
    validates :ticker, presence: true, uniqueness: true
    validates :name, presence: true

    has_many :transactions
end

