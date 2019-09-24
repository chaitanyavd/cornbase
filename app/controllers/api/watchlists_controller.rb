class Api::WatchlistsController < ApplicationController

    before_action :require_logged_in

    def index 
        # debugger 
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

    # def show 
    #     # @watchlist = current_user.watchlists.find(params[:id])
    #     # ticker = current_user.watchlists.pluck(:ticker).join(",")
    #     # key = Rails.application.credentials.nomics[:api_key]
    #     # uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{ticker}")
    #     # @watchlists = Net::HTTP.get(uri)

    #     # render json: @ticker

    #     #?? HOW DO YOU FIND A SPECIFIC TICKER -- MANS BRAINFARTING
    # end 

    def create 
        @watchlist = Watchlist.new(watchlist_params)
        render json: @watchlist.errors.full_messages, status: 422 unless @watchlist.save 
    end 


    def destroy
        # @watchlist = current_user.watchlists.find_by(params[:ticker])
        # @watchlist = current_user.watchlists.find_by(params[:ticker])
        @watchlist = current_user.watchlists.find_by(ticker: params[:id])
        # debugger
        @watchlist.destroy
    end

    private 

    def watchlist_params 
        params.require(:watchlist).permit(:user_id, :ticker, :id)
    end 

end
