Rails.application.routes.draw do
  resources :menus
  resources :restaurants
 

  get '/hello', to: 'application#hello_world'
end
