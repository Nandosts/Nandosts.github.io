Rails.application.routes.draw do
  scope "(:locale)", locale: /en|pt-BR/ do
    root "pages#home"
    get "about", to: "pages#about"
    get "lorem/:repeat", to: "pages#lorem", constraints: { repeat: /\d+/ }
    get "lorem", to: "pages#lorem", defaults: { repeat: 1 }

    resources :sites, only: [ :show ]
  end
end
