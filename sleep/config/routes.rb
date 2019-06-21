Rails.application.routes.draw do
  resources :test_results
  get 'session/new'

  post 'session/create'

  get 'session/destroy'

  resources :users
  get 'users/new'
  post 'users/new'

  get 'test_results/new'
  post 'test_results/new'

  get 'test_results/new'

  root to: 'home#input'

  get 'home/input'

  get 'home/output'
  post 'home/output'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
