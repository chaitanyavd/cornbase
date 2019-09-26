class Api::WatchlistsController < ApplicationController

    before_action :require_logged_in

    def index 
        key = Rails.application.credentials.nomics[:api_key]       
        tickers = current_user.watchlists.pluck(:ticker).join(",")
            if tickers == ""
                render json: "ok"
            else 
                uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{tickers}")
                @watchlists = Net::HTTP.get(uri)
                render json: @watchlists
            end 
    end


    def create  
        @watchlist = Watchlist.new(user_id: current_user.id, ticker: watchlist_params[:id])
            if @watchlist.save
                key = Rails.application.credentials.nomics[:api_key]
                ticker = watchlist_params[:id]
                uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{ticker}")
                @watchlist = Net::HTTP.get(uri)
                render json: @watchlist
            else 
                render json: @watchlist.errors.full_messages, status: 422 
            end
    end 


    def destroy
        @watchlist = current_user.watchlists.find_by(ticker: params[:id])
        
        if @watchlist.destroy
                render json: @watchlist
        else 
            render json: @watchlist.errors.full_messages, status: 422 
        end
        
    end

    private 

    def watchlist_params 
        params.require(:watchlist).permit(:user_id, :ticker, :id)
    end 

end
