// app.js
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogId = 1; // Replace with the desired blog ID for testing

const fetchBlog = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    console.log('Single Blog:', data);
};

// Example Usage
fetchBlog(blogId);