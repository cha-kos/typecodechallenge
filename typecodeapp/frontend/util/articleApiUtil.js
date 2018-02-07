export const updateArticle = ({article}) => {
  return $.ajax({
    method: "PATCH",
    url: `api/articles/${slug}`,
	data: { title: title}
  });
};

export const getArticle = (slug) => {
  return $.ajax({
    method: "PATCH",
    url: `api/articles/${slug}`
  });
};
