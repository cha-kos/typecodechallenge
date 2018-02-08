class Api::ArticlesController < ApplicationController

  def show
    @article = Article.find_by slug: params[:slug]
    render :show
  end

  def create
    @article = Article.new(title: params[:title])

    if @article.save!
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @article = Article.find_by slug: params[:slug]
    if @article.title == params[:title]
      render :show
      return
    else
      @article.title = params[:title]
    end

    if @article.save!
      render :show
    else
      render json: @article.errors.full_messages, status: 422
    end
  end


end
