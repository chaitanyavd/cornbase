class Api::CoinsController < ApplicationController

    def index 
        @coins = Coin.all 
    end 

    def show 
        @coin = Coin.find_by(ticker: params[:ticker])
    end 
    
end

