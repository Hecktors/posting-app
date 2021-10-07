import React, { useState, useEffect } from 'react';
import { getPosts, addPost } from '../api/postAPI';
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
    const fetchUser = async () => {
      setUsers(await getUsers());
      setPosts(await getPosts());
    }
    fetchUser()
  }, []);

  const addNewPost = async (postData) => {
    setPosts([await addPost(postData), ...posts]);
    setIsFormOpen(false);
  };

  const postComponents = posts.map(post => {
    const username = users.find(u => u.id === post.userId).username;
    return <Post key={post.id} post={post} users={users} username={username} />
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
          addNewPost={addNewPost}
          cancel={() => setIsFormOpen(false)}
        />
        : buttonContainer}
      <List sx={{ width: '100%', margin: "0 auto", maxWidth: '80%', bgcolor: 'background.paper' }}>
        {postComponents}
      </List>
    </>
  )
}
