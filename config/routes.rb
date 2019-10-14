Rails.application.routes.draw do
  devise_for :users

  root 'static#index'

  namespace :api do
  	get 'products', to: 'products#index'
  	get 'products/all', to: 'products#all'
  	get 'categories', to: 'categories#index'
  	post 'products/new', to: 'products#create'
  end

end
