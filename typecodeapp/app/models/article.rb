class Article < ActiveRecord::Base
  validates :title, :slug, presence: true
  validates :slug, uniqueness: true

  def to_param
    self.slug
  end

  def self.verify_slug(slug)
    if is_valid?(slug)
      while !is_valid?(slug)
        slug = append_to_slug(slug)
      end
    end
    return slug
  end

  def self.is_valid?(slug)
    if Article.exists?(slug: slug)
      return false
    else
      return true
    end
  end

  def self.append_to_slug(slug)
    random_string = ('a'..'z').to_a.shuffle[0,5].join
    return slug + "-" + random_string
  end
end
