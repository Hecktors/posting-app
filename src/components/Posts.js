import React, {useState, useEffect} from 'react';
import { getPosts } from '../api/postAPI';
import { getUsers } from '../api/userAPI';
import Post from './Post';
import List from '@mui/material/List';


export default function Posts({user}) {
    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
      const fetchUser = async () => {
        setUsers(await getUsers());
        setPosts(await getPosts());
      }
      fetchUser()
    },[])

    const postComponents = posts.map(post => {
            const username = users.find(u => u.id === post.userId).username;
            return <Post key={post.id} post={post} users={users} username={username} />
        })
    
    return (
      <>
        <h1>Posts</h1>
        <List sx={{ width: '100%', margin: "0 auto", maxWidth: '80%', bgcolor: 'background.paper' }}>            
            { postComponents }
        </List>
        </>
    )
}
