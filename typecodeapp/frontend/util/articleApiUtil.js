
export const updateArticle = ( article ) => {
  return $.ajax({
    method: "PATCH",
    url: `api/articles/${article.oldSlug}`,
	   data: { title: article.title, new_slug: article.newSlug }
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
