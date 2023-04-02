const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogPostTitle = urlParams.get('title');
const blogPostContainer = document.getElementById("blogpost-container");

const serverURL = window.config.serverUrl

const blogPostUrl = `${serverURL}/api/posts/${blogPostTitle}`;

fetch(blogPostUrl)
  .then(response => response.json())
  .then(blogPost => {
    
    let { title, category, date, content, image } = blogPost;

    document.title = title;
    date = new Date(date)
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);


    blogPostContainer.innerHTML = `
      <div class="blogpost">
      <h1 class="blogpost-title">${title}</h1>
      <div id="blogpost-image">
      <img class="featured-image" src="${serverURL}/images/${image}" alt="Tasneem Al Sahat">
      </div>
        <div class="blogpost-meta">
          <span class="blogpost-category">${category}</span>
          <span class="blogpost-date">${formattedDate}</span>
        </div>
        <div class="blogpost-content">${content}</div>
      </div>
    `;
  })
  .catch(error => console.log(error));
