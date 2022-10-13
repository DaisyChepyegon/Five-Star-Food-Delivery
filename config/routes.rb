Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :menus, only: [:index, :show, :create, :update, :destroy]
  resources :restaurants, only: [:index, :show, :create, :update, :destroy]
 

  get '/hello', to: 'application#hello_world'
end
