const API_ENDPOINT = process.env.WORDPRESS_API_URL;

export const getHomeFeauturePosts = async () => {
  const response = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?categories=426637499&per_page=5"
  );
  const data = await response.json();
  const featureIslandFirst = data.shift();

  return {
    data,
    featureIslandFirst,
  };
};

export const getHomeLatestPosts = async () => {
    const response = await fetch(
      "https://techcrunch.com/wp-json/wp/v2/posts?per_page=4"
    );
    const data = await response.json();
  
    return data;
  };