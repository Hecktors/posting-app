import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Comment({ comment, users, username }) {
    return (
        <>
            <ListItem alignItems="flex-start" padding="0" style={{padding: "1px"}}>
                <ListItemText 
                    style={{color: "#212121"}}
                    primary={comment.name} 
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
                            {" - " +  comment.body}
                        </React.Fragment>
                    }/>
                </ListItem>
            <Divider />
        </>
    );
}

