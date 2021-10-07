import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function PostForm({ postId = null, userId, title = "", body = "", submitPost, cancel }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        let postData = {
            id: postId,
            title: data.get('title'),
            body: data.get('content'),
            userId
        }
        submitPost(postData);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" style={{ padding: "0", width: "75%" }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "100%"
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            name="title"
                            label="title"
                            defaultValue={title}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            name="content"
                            label="content"
                            defaultValue={body}
                            rows="5"
                            multiline={true}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                mt: 3,
                                mb: 2
                            }}
                        >
                            <Button
                                type="button"
                                variant="contained"
                                color="error"
                                onClick={cancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}