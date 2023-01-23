export const getAllPosts = async () => {
  const res = await fetch("http://localhost:3001/posts");
  const posts: any = await res.json();
  return posts;
};

export const getPostByID = async (id: number) => {
  const res = await fetch(`http://localhost:3001/posts/${id}`);
  const post: any = res.json();
  return post;
};
