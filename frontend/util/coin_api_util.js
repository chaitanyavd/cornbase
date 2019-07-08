

const allCoinsIds = "&ids=BTC,ETH,XRP,LTC,BCH,EOS,XLM,LINK,ETC,ZEC,BAT,USDC,ZRX,REP,DAI,BSV,BNB,USDT,TRX,ADA,XMR,DASH,NEO,MIOTA,ATOM,XEM,XTZ,MKR,ONT,CRO,QTUM,BTG, DOGE,VET,OMG,VSYS,DCR,EGT,HOT,TUSD,BCD,HEDG,RVN,LSK,WAVES,HT,NPXS,KMD,AOA,NANO,QBIT,BTM,ICX,BCN,BTS,IOST,DGB,PAX,MONA,QNT,ZIL,KCS,NRG,ABBC,SC"


export const fetchCoin = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://api.nomics.com/v1/currencies/ticker?key=66f825496dd3f9963d852713f779e206&ids=${symbol}`
    })
)




export const fetchCoins = () => (
    $.ajax({
        url: `https://api.nomics.com/v1/currencies/ticker?key=66f825496dd3f9963d852713f779e206${allCoinsIds}`,
        method: "GET"
    })
)

   
