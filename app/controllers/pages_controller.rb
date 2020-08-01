class PagesController < ApplicationController
  def home
    if !current_user
      redirect_to "/users/sign_in"
    end
  end

  def write
    if !current_user
      redirect_to "/users/sign_in"
    end
    @current_user = current_user
  end

  def overview
    if !current_user
      redirect_to "/users/sign_in"
    end
    @current_user = current_user
  end
end
