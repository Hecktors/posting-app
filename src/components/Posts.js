import React, { useState, useEffect } from 'react';
import { getPosts, addPost, deletePost } from '../api/postAPI';
import { getUsers } from '../api/userAPI';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Post from './Post';
import PostForm from './PostForm';


export default function Posts({ user }) {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getUsers());
      setPosts(await getPosts());
    }
    fetchData()
  }, []);

  const handleAddPost = async (postData) => {
    setPosts([await addPost(postData), ...posts]);
    setIsFormOpen(false);
  };

  const handleDeletePost = async (postId) => {
    (await deletePost(postId)).ok && setPosts(posts.filter(post => post.id !== (postId)));
  }

  const postComponents = posts.map(post => {
    const postOwner = users.find(u => u.id === post.userId);
    return <Post 
            key={post.id + Math.floor(Math.random()*999999)} 
            post={post} 
            users={users} 
            user={user} 
            postOwner={postOwner}
            deletePost={() => handleDeletePost(post.id)} />
  });

  const buttonContainer = <div style={{ textAlign: "right", maxWidth: '80%', margin: "10px auto" }}>
    <Button onClick={() => setIsFormOpen(true)} color="secondary">add Post</Button>
  </div>

  return (
    <>
      <h1>Posts</h1>
      {isFormOpen
        ? <PostForm
          userId={user.id}
          addNewPost={handleAddPost}
          cancel={() => setIsFormOpen(false)}
        />
        : buttonContainer}
      <List sx={{ width: '100%', margin: "0 auto", maxWidth: '80%', bgcolor: 'background.paper' }}>
        {postComponents}
      </List>
    </>
  )
}
