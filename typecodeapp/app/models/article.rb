class Article < ActiveRecord::Base
  validates :title, :slug, presence: true
  validates :slug, uniqueness: true

  attr_accesible :name, :slug

  def to_param
    slug
  end

  def validate_slug(slug)
    if Article.find_by_slug(slug)
      return true
    else
      return false
    end
  end

  def append_to_slug(slug)
    random_string = ""
    return slug + "-" + random_string
  end


end
