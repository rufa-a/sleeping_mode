class SessionController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]

  def new # sign up
  end

  def create # log in
  	user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      #session[:user_id] = user.id
      sign_in user
      redirect_to root_path
      flash[:success] = "Welcome, #{user.username}"
      #redirect_to user
    else
      flash[:error] = 'Invalid email or password'
      redirect_to session_new_path
      #render 'new'
    end
  end

  def destroy # log out
  	sign_out
  	redirect_to session_new_path
  end
end
