const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogPostTitle = urlParams.get('title');
const blogPostUrl = `http://localhost:3000/blogpost?title=${blogPostTitle}`;
const blogPostContainer = document.getElementById("blogpost-container");
const sampleBlogPost ={
  "id": 1,
  "title": "How to Make the Perfect Cup of Coffee",
  "category": "Food and Drink",
  "date": "2022-03-25",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod arcu felis, eu ullamcorper est bibendum sed. Integer at commodo lorem, vel fringilla metus. Vivamus sit amet leo sed enim lobortis lacinia. Phasellus mollis lobortis ante ac lobortis. Nunc euismod urna velit, vel laoreet neque venenatis vel. Sed pretium, sapien sed tristique vehicula, lacus quam vehicula leo, auctor ullamcorper augue nibh eu nunc. Aenean sed ante at velit hendrerit commodo eu non nulla. Fusce sit amet metus sed elit dignissim finibus."
}

// fetch(blogPostUrl)
//   .then(response => response.json())
//   .then(blogPost => {
    const { title, category, date, content } = sampleBlogPost;

    document.title = title;

    blogPostContainer.innerHTML = `
      <div class="blogpost">
      <h1 class="blogpost-title">${title}</h1>
      <div id="blogpost-image">
      <img src="./1.jpg" alt="Tasneem Al Sahat">
      </div>
        <div class="blogpost-meta">
          <span class="blogpost-category">${category}</span>
          <span class="blogpost-date">${date}</span>
        </div>
        <div class="blogpost-content">${content}</div>
      </div>
    `;
  // })
  // .catch(error => console.log(error));
