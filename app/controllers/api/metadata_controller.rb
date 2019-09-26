class Api::MetadataController < ApplicationController

    def show 
        # key = Rails.application.credentials.coinmarketcap[:api_key]
        # debugger
        #? How do you store a key again?
        # uri = URI("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=#{key}&symbol=#{params[:id]}")
        uri = URI("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=ef706d65-7d7d-4e9a-94a7-ec4b62468e15&symbol=#{params[:id]}")
        @metadata = Net::HTTP.get(uri)
        render json: @metadata 

    end 
end
