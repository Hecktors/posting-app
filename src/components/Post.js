import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Comments from './Comments';

export default function Post({ post, users, username }) {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false)
    return (
        <>
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
                                {username}
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
            </ListItem>
            {isCommentsOpen && <Comments postId={post.id} users={users} />}
            <Divider />
        </>
    );
}

