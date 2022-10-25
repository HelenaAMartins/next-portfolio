export const getApi = async (route) => {
  const response = await fetch(`https://gzk9bkt2.directus.app/items/${route}`).then((res) => res.json());
  return response?.data;
};
