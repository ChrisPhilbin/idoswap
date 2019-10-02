Rails.application.routes.draw do
  devise_for :users

  root 'static#index'

  namespace :v1 do
  	get 'products', to: 'products#index'
  end

end
