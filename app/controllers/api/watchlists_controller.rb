class Api::WatchlistsController < ApplicationController

    before_action :require_logged_in

    def index 
        # debugger 
        key = Rails.application.credentials.nomics[:api_key]

        
            tickers = current_user.watchlists.pluck(:ticker).join(",")
            # debugger
            # uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{tickers}")
            # @watchlists = Net::HTTP.get(uri)
            # # debugger 
            # render json: @watchlists

            # debugger 
            # unless tickers == "" 
            #     uri = = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{tickers}")
            #     @watchlists = Net::HTTP.get(uri)
            # end 

            if tickers == ""
                # debugger 
                # @watchlists = {"Nothing Here"}
                render json: "ok"
            else 
                uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{tickers}")
                @watchlists = Net::HTTP.get(uri)
                render json: @watchlists
            end 

            
            # render json: @watchlists


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
        # debugger
        @watchlist = current_user.watchlists.find(params[:id])
        @watchlist.destroy
    end

    private 

    def watchlist_params 
        params.require(:watchlist).permit(:user_id, :ticker, :id)
    end 

end
