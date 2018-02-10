Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
     resources :articles, only: [:index, :show, :create, :update], param: :slug do
       resources :verify, only: [:index]
     end
    end
  end
