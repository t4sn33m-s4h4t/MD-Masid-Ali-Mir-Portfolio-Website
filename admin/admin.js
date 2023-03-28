const postTable = document.getElementById('post-table');

// Function to fetch posts from the server
async function fetchPosts() {
  try {
    const response = await fetch('http://localhost:5000/posts');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

// Function to display posts in the table
function displayPosts(posts) {
  posts.forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.date}</td>
      <td><button>Edit</button></td>
    `;
    postTable.appendChild(row);
  });
}

// Function to add a new post
async function addPost(postData) {
  try {
    const response = await fetch('http://localhost:5000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Event listener for adding a new post
document.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const content = formData.get('content');
  const date = new Date().toISOString();
  const postData = { title, content, date };
  const result = await addPost(postData);
  console.log(result);
});

// Main function to fetch and display posts
async function main() {
  const posts = await fetchPosts();
  displayPosts([{posts}]);
}

main();
