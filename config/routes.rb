Rails.application.routes.draw do
	devise_for :users
	resources :posts
	get "users/:id",					 to: "users#show"
	post "users/:id/follow",	 to: "users#follow"
	post "users/:id/unfollow", to: "users#unfollow"
	get "hashtags/:hashtag",   to: "hashtags#show",      as: :hashtag
	get "hashtags",            to: "hashtags#index",     as: :hashtags
	post "posts/:id/like", 		 to: "posts#like_post",    as: :like

  get "newsfeeds",           to: "newsfeeds#index",    as: :newsfeeds
  get "followers",           to: "followers#index",    as: :followers
  get "following",           to: "following#index",    as: :following
	
  root "posts#index"
end
