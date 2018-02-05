class Api::ArticlesController < ApplicationController

  def show
    debugger
    @article = Article.find_by slug: params[:slug]
  end

  def create
    debugger
    @article = Article.new(title: params[:title])
    # @article.generate_slug


    if @article.save!
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end


end
