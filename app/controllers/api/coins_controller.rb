class Api::CoinsController < ApplicationController

    
    def index 
        allCoinsIds = "&ids=BTC,ETH,XRP,LTC,BCH,EOS,XLM,LINK,ETC,ZEC,BAT,USDC,ZRX,REP,DAI,BSV,BNB,USDT,TRX,ADA,XMR,DASH,NEO,MIOTA,ATOM,XEM,XTZ,MKR,ONT,CRO,QTUM,BTG, DOGE,VET,OMG,VSYS,DCR,EGT,HOT,TUSD,BCD,HEDG,RVN,LSK,WAVES,HT,NPXS,KMD,AOA,NANO,QBIT,ICX,BCN,BTS,IOST,DGB,PAX,MONA,QNT,ZIL,KCS,NRG,ABBC,SC"
        # allCoinsIds = "&ids=BTC,ETH,XRP,LTC,BCH,EOS"
        key = Rails.application.credentials.nomics[:api_key]
        uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}#{allCoinsIds}")
        @coins = Net::HTTP.get(uri)
        render json: @coins
    end 

    def show 
        key = Rails.application.credentials.nomics[:api_key]
        uri = URI("https://api.nomics.com/v1/currencies/ticker?key=#{key}&ids=#{params[:id]}")
        @coin = Net::HTTP.get(uri)
        render json: @coin 

    end 

    # def coin_params 
    #     params.require(:coin).permit(:name, :symbol, :price, :currency, :id, :rank, :high, :circulating_supply)
    # end 
    # def show 
    #     # key = Rails.application.credentials.nomics[:api_key]
    #     #? How do you store a key again?
    #     debugger
    #     uri = URI("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=ef706d65-7d7d-4e9a-94a7-ec4b62468e15&symbol=#{params[:id]}")
    #     @metadata = Net::HTTP.get(uri)
    #     render json: @metadata 

    # end 
end
