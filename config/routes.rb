Rails.application.routes.draw do
  resources :posts
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end