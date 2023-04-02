
  const postsWrapper = document.querySelector('#posts-wrapper');

  const serverURL = window.config.serverUrl

  const showAllPosts=(blogPosts)=>{
    
  
    const options = { year: "numeric", month: "long", day: "numeric" };
    ;

    postsWrapper.innerHTML = blogPosts.map(post => `
    <div class="post-card">
    <img src="${serverURL}/images/${post.image}" alt="${post.title}">
        <div class="post-content">
          <h2 class="post-title">${post.title}</h2>
          <p class=" date">${(new Date(post.date)).toLocaleDateString("en-US", options)}</p>
          <p class="orange-color post-author">${post.category}</p>
          <p class="post-excerpt">${post.content.substring(0, 140)}...</p>
          <a class="read-more-link" href="../single-post/index.html?title=${post.title }">Read More...</a>
        </div>
      </div>
    `).join('');

    }
    fetch(`${serverURL}/api/posts`)
    .then(response => response.json())
    .then(json => {
      showAllPosts(json)
    })