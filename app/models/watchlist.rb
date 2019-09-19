class Watchlist < ApplicationRecord
    validates :user_id, presence: true
    validates :ticker, uniqueness: { scope: :user_id }

    belongs_to :user
end
#