json.title  @article.title
json.slug  @article.slug
json.author @article.author
json.body  @article.body
json.quote  @article.quote
json.location  @article.location
json.tags @article.tags
json.date @article.created_at.strftime("%B %d, %Y")
json.loading false
