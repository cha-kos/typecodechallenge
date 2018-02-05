class Article < ActiveRecord::Base
  validates :title, :slug, presence: true
  validates :slug, uniqueness: true

  def to_param
    self.slug
  end

  def generate_slug
    create_slug
  end

 private
  def create_slug
    slug = convert_title_to_slug
    if validate_slug(slug)
      while validate_slug(slug)
        slug = append_to_slug(slug)
      end
    end
    self.slug = slug
  end

  def convert_title_to_slug
    self.title.downcase.gsub(" ", "-")
  end

  def validate_slug(slug)
    if Article.exists?(slug: slug)
      return true
    else
      return false
    end
  end

  def append_to_slug(slug)
    random_string = ('a'..'z').to_a.shuffle[0,5].join
    return slug + "-" + random_string
  end
end
