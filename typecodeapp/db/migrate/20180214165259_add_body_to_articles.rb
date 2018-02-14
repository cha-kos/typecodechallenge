class AddBodyToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :body, :string
    add_column :articles, :location, :string
    add_column :articles, :quote, :string
  end
end
