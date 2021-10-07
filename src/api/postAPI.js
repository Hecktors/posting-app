export const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
}

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
}