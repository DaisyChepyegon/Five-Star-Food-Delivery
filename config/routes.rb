Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :menus, only: [:index, :show, :create, :update, :destroy]
  resources :restaurants, only: [:index, :show, :create, :update, :destroy]


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "customers#create"
  get "/me", to: "customers#show"
end
