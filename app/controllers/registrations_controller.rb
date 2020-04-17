class RegistrationsController < Devise::RegistrationsController
    before_action :configure_permitted_parameters
    respond_to :json 
    
    def new
        user = User.new(user_params)
    end
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
    
    private 
    
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
    
end
            
        