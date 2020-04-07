class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: posts
    end
    
    def show
        @post = Post.find(params[:id])
        render json: post
    end
    
    def create
        @post = Post.create
        
    end
    def 
end
