Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy, :show]
    resources :coins, only:[:index, :show]
    resources :watchlists, only:[:index, :create, :destroy]
    resources :metadata, only:[:show]
    resources :transactions, only:[:index, :create]
  end 
end

