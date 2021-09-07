import http from './httpService';

const apiEndPoint = '/posts';

function postUrl(id) {
  return `/post/${id}`;
};

export function getPosts() {
  return http.get(apiEndPoint);
};

export function getNumberOfPosts(limit) {
  return http.get(`${apiEndPoint}/${limit}`);
};

export function createPost(post) {
  return http.post('/post', post);
};

export function updatePost(post) {
  return http.put(postUrl(post.id), post);
};

export function deletePost(id) {
  return http.delete(postUrl(id));
};
