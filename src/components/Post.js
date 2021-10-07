import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Comments from './Comments';
import PostForm from './PostForm';

export default function Post({ post, users, postOwner, user, deletePost, updatePost }) {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false);
    const isPostOwner = postOwner.id === user.id;

    const handleEdit = (postData) => {
        updatePost(postData);
        setIsFormOpen(false);
    }

    return (
        <> {
            isFormOpen
                ? <PostForm
                    postId={post.id}
                    userId={user.id}
                    title={post.title}
                    body={post.body}
                    submitPost={handleEdit}
                    cancel={() => setIsFormOpen(false)}
                />
                :
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={`https://i.pravatar.cc/150?img=${post.userId}`} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={post.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {postOwner.username}
                                </Typography>
                                {" - " + post.body}
                                <br />
                                <span
                                    onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                                    style={{ margin: 0, color: "#1976d2" }}>
                                    {!isCommentsOpen ? "open" : "close"} comments
                                </span>
                            </React.Fragment>
                        }
                    />
                    {
                        isPostOwner
                        && <div>
                            <ListItemButton onClick={() => setIsFormOpen(true)}>Edit</ListItemButton>
                            <ListItemButton onClick={deletePost}>Delete</ListItemButton>
                        </div>
                    }

                </ListItem>
        }
            {isCommentsOpen && <Comments postId={post.id} users={users} />}
            <Divider />
        </>
    );
}

