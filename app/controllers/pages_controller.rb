class PagesController < ApplicationController
  def home
    if !current_user
      redirect_to "/users/sign_in"
    end
  end

  def write
  end
end
