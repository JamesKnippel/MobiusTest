class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # def configure_permitted_parameters
    
  #     devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:balance) }
  #     devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:balance, :email, :password) }
  # end
end

