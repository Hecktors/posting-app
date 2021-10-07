import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function PostForm({userId, addNewPost, cancel}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const postData = {
        title: data.get('title'),
        body: data.get('content'),
        userId
    }
    addNewPost(postData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{padding: "0"}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="content"
              label="content"
              id="content"
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
              Dismiss
            </Button>
            <Button
              type="submit"
              variant="contained"
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