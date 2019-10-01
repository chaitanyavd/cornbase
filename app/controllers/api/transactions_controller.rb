class Api::TransactionsController < ApplicationController

    before_action :require_logged_in

    def create 

    end 

    def index 
        @transactions = current_user.transactions
    end 
    
    def transaction_params
        params.require(:transaction).permit(:num_coins, :order_type, :price)
    end 

    

end
