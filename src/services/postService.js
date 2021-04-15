import http from "./httpService";

export function getPosts() {
  return http.get("/posts");
}

export function getNumberOfPosts(limit) {
  return http.get(`/posts/${limit}`);
}

export function createPost(post) {
  return http.post("/post", post);
}

export function updatePost(post) {
  return http.put(`/post/${post.id}`, post);
}

export function deletePost(id) {
  return http.delete(`/post/${id}`);
}
