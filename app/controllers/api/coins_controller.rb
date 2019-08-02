class Api::CoinsController < ApplicationController

    
    def index 
        allCoinsIds = "&ids=BTC,ETH,XRP,LTC,BCH,EOS,XLM,LINK,ETC,ZEC,BAT,USDC,ZRX,REP,DAI,BSV,BNB,USDT,TRX,ADA,XMR,DASH,NEO,MIOTA,ATOM,XEM,XTZ,MKR,ONT,CRO,QTUM,BTG, DOGE,VET,OMG,VSYS,DCR,EGT,HOT,TUSD,BCD,HEDG,RVN,LSK,WAVES,HT,NPXS,KMD,AOA,NANO,QBIT,ICX,BCN,BTS,IOST,DGB,PAX,MONA,QNT,ZIL,KCS,NRG,ABBC,SC"
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
    
end
