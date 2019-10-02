Rails.application.routes.draw do
  devise_for :users

  namespace :v1, defaults: { format: 'json' } do
  	get 'products', to: 'products#index'
  end

end
