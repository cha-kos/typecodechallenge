class Api::ArticlesController < ApplicationController

  def show
    @article = Article.find_by_slug(params[:slug])
  end

  def create
    debugger
    article = Article.new(title: params[:title])
    article.generate_slug


    if article.save!
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:title)
  end


end
