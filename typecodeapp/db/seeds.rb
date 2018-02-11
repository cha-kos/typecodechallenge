# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Article.destroy_all

titles = ["It is impossible to walk rapidly and be unhappy.",
          "We don't get offered crises, they arrive.",
          "I have seen the future and it doesn't work.",
          "I dwell in possibility...",
          "Knowledge is power."]

def to_slug(title)
  title.downcase.gsub(/[^a-zA-Z\s]/, "")
                .gsub('&', '')
                .gsub(/[\s]/, "-")
                .gsub(/\.+$/, "")
end

titles.each do |title|
  Article.create({title: title, slug: to_slug(title)})
end
