import React, {useState, useEffect} from 'react';
import { getComments } from '../api/commentAPI';
import List from '@mui/material/List';
import Comment from './Comment';


export default function Comments({postId, users}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      const fetchComments = async () => {
        setComments(await getComments(postId));
      }
      fetchComments()
    },[postId]);

    const commentComponents = comments.map(comment => {
        let username = users.find(u => u.email === comment.email)?.username || "unknown";
        return <Comment key= {comment.id} comment={comment} users={users} username={username}/>
    });

    return (
        <List sx={{ width: '100%', margin: "0 auto", maxWidth: '80%', bgcolor: 'background.paper' }}>            
            { commentComponents }
        </List>
    )
}
