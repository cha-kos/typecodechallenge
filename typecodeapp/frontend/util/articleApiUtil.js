export const updateArticle = ( article ) => {
  return $.ajax({
    method: "PATCH",
    url: `api/articles/${article.slug}`,
	   data: { title: article.title }
  });
};

export const getArticle = (slug) => {
  return $.ajax({
    method: "GET",
    url: `api/articles/${slug}`
  });
};

export const verifySlug = (slug) => {
  return $.ajax({
    method: "GET",
    url: `api/articles/${slug}/verify`
  });
};
