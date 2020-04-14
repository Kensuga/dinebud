class PostsController < ApplicationController
    
    def index
        @posts = Post.all
        render json: @posts
    end
    
    def show
        @post = Post.find(params[:id])
        render json: @post
    end
    
    def create
        @post = current_user.posts.create(post_params)
        if @post.valid?
            render json: @post
        else
            render json: @post.errors
        end
    end
    
    def destroy
        @post = Post.find(params[:id])
        if @post.destroy
            render json: @post
        else 
            render json: @post.errors
        end
    end
    
    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
            if @post.valid?
                render json: @post
            else
                render json:@post.errors
            end
    end
    
    private
    def post_params
        params.require(:post).permit(:location, :schedule_time, :active, :user_id, :partner_id)
    end
    
end
