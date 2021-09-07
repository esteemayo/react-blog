import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  getPosts,
  getNumberOfPosts,
  deletePost,
} from '../services/postService';
import PostForm from '../components/PostForm';
import Spinner from './../components/Spinner';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [editingPost, setEditingPost] = useState({
    title: '',
    body: '',
    id: null,
  });

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const { data } = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleDeletePost = async (id) => {
    const originalPosts = posts;
    const updatedPost = originalPosts.filter((p) => p.id !== id);
    setPosts(updatedPost);

    try {
      await deletePost(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error('This post has already been deleted!');
      setPosts(originalPosts);
    }
  };

  const addPost = (post) => {
    if (posts.find((p) => p.id === post.id)) {
      const index = posts.findIndex((p) => p.id === post.id);
      const postsUpdated = [...posts];
      postsUpdated.splice(index, 1, post);
      setPosts(postsUpdated);
    } else {
      const postsUpdated = [post, ...posts];
      setPosts(postsUpdated);
    }
  };

  const handleGetNumberOfPosts = async () => {
    const { data: posts } = await getNumberOfPosts(limit);
    setPosts(posts);
  };

  return (
    <>
      <div>
        <div className='row'>
          <div className='col s6'>
            <PostForm addPost={addPost} editingPost={editingPost} />
          </div>
          <div className='col s3 push-in'>
            <p>Limit number of posts</p>
            <input
              type='number'
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
            <button
              onClick={handleGetNumberOfPosts}
              className='waves-effect waves-light btn'
            >
              Set
            </button>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className='row'>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
