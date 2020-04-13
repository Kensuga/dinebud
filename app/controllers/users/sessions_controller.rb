# frozen_string_literal: true

# class Users::SessionsController < Devise::SessionsController
#   # before_action :configure_sign_in_params, only: [:create]

#   # GET /resource/sign_in
   def new
     user = User.new(user_params)
   end

#   # POST /resource/sign_in
    def create
        user = User.create(email: params[:email], 
        password: params[:password], 
        password_confirmation: params[:password_confirmation])
        
        if user.save
            render json: {status: "Succes", message: "Created new user account", data: user}, status: :ok
        else 
            render json: {status: "Error", message: "Could not create new user account", data: user.errors}, status: :unprocessable_entity
        end 
    end 

#   # DELETE /resource/sign_out
#   # def destroy
#   #   super
#   # end

#   # protected
    private 
    
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
#   # If you have extra params to permit, append them to the sanitizer.
#   # def configure_sign_in_params
#   #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
#   # end
# end
