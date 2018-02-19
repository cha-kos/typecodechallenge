class Api::ArticlesController < ApplicationController

  def show
    @article = Article.find_by slug: params[:slug]
    if @article
      render :show
    else
      render json: "Requested Article Does Not Exist", status: 422
    end
  end

  def update
    @article = Article.find_by slug: params[:slug]
    # if the article title is the same, render show method
    if @article.title == params[:title]
      render :show
      return
    else
      @article.title = params[:title]
      @article.slug = params[:new_slug]
    end

    if @article.save!
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end
end
