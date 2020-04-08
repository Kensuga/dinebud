class ProfilesController < ApplicationController
    def index
        @profiles = Profile.all
        render json: @profiles
    end
    
    def show
        @profile = Profile.find(params[:id])
        render json: @profile
    end
    
    def create
        @profile = current_user.profiles.create(post_params)
        if @profile.valid?
            render json: @profile
        else
            render json: @profile.errors
        end
    end
    
    def destroy
        @profile = Profile.find(params[:id])
        if @profile.destroy
            render json: @profile
        else 
            render json: @profile.errors
        end
    end
    
    def update
        @profile = Profile.find(params[:id])
        @profile.update(post_params)
            if @profile.valid?
                render json: @profile
            else
                render json:@post.errors
            end
    end
    
    private
    def post_params
        params.require(:posts).permit(:name, :image, :bio)
    end
end
