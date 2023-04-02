const postTable = document.getElementById("post-table");

// Function to fetch posts from the server
async function fetchPosts() {
  try {
    const response = await fetch(`${serverURL}/api/posts`);
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
  }
}

const serverURL = window.config.serverUrl;
// Function to display posts in the table
function displayPosts(posts) {
  posts.forEach((post) => {
    date = new Date(post.date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);






    var cell = document.createElement("td");
    var button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = function () {
      deletePost(`${post._id},${post.image}`);
    };
    cell.appendChild(button);




    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post._id}</td>
      <td>${post.title}</td>
      <td>${formattedDate}</td>
      
    `;
    row.appendChild(cell);
    postTable.appendChild(row);
  });
}

const deletePost = async (post) => {
  id = post.split(",")[0];
  image = post.split(",")[1];

  try {
    const response = await fetch(`${serverURL}/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await fetch(`${serverURL}/api/images/${image}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Reload the page on success
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

// Main function to fetch and display posts
async function main() {
  const posts = await fetchPosts();

  displayPosts(posts);
}

main();
