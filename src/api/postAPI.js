// Get all posts
export const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
};

// Add post
export const addPost = (post) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: post.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
};

// Update post
export const updatePost = (post) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

// Delete post
export const deletePost = (postId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    });
};