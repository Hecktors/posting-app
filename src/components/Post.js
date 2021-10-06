import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Post({ post, users, username }) {
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
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider />
        </>
    );
}

