# json.array! @coins do |coin|
#   json.ticker coin.ticker
#   json.name coin.name
# end

# @coins.each do |coin|
#   json.set! coin.id do 
#     json.extract! coin, :id, :ticker, :name
#   end 
# end 

json.extract! @coins
