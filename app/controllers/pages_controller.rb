class PagesController < ApplicationController
  def home
	  return redirect_to "/users/sign_in" if !current_user  # can be later moved to a before filter
	  return redirect_to "/pages/journey/" if Journal.with_user_id(current_user.id).count != 0
  end

  def write
	  return redirect_to "/users/sign_in" if !current_user
    @current_user = current_user
  end

  def journey
	  return redirect_to "/users/sign_in" if !current_user
	  return redirect_to "/pages/home/" if Journal.with_user_id(current_user.id).count == 0
    @current_user = current_user
	  @journals = Journal.with_user_id(current_user.id)
  end
end
