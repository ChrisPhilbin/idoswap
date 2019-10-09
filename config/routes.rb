Rails.application.routes.draw do
  devise_for :users

  root 'static#index'

  namespace :api do
  	get 'products', to: 'products#index'
  	get 'categories', to: 'categories#index'
  end

end
