Rails.application.routes.draw do

  get '/hello', to: 'application#hello_world'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "customers#create"
  get "/me", to: "customers#show"
end
