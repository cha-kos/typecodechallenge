class ArticlesController < ApplicationController

  def show
    # article = Article.find_by_slug(params[:slug])
  end

  def create
    article = Article.new
    article.title = params[:title]
    slug = article.convert_title_to_slug(article.title)

    if !article.validate_slug(slug)
      until article.validate_slug(slug)
        slug = article.append_to_slug(slug)
      end
    end

    article.slug = slug

    if article.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

end
