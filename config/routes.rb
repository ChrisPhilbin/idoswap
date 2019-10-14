Rails.application.routes.draw do
  devise_for :users

  root 'static#index'

  namespace :api do
  	post 'products', to: 'products#create'
  	get 'products', to: 'products#index'
  	get 'products/all', to: 'products#all'
  	get 'categories', to: 'categories#index'
  end

end
