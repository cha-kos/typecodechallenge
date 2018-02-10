class Api::VerifyController < ApplicationController

  def index
    @slug = Article.verify_slug(params[:article_slug])
  end

end
