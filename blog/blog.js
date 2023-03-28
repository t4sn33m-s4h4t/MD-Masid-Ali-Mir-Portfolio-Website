const blogPosts = [
    {
        title: "10 Tips for Better Time Management",
        content: "Are you struggling to make the most of your time? Check out these 10 tips for better time management and start getting more done in less time.",
        image: "../img/news/1.jpg",
        date: "March 20, 2023",
        author: "John Doe"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/2.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/3.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
     
    {
        title: "10 Tips for Better Time Management",
        content: "Are you struggling to make the most of your time? Check out these 10 tips for better time management and start getting more done in less time.",
        image: "../img/news/1.jpg",
        date: "March 20, 2023",
        author: "John Doe"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/2.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/3.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
     
    {
        title: "10 Tips for Better Time Management",
        content: "Are you struggling to make the most of your time? Check out these 10 tips for better time management and start getting more done in less time.",
        image: "../img/news/1.jpg",
        date: "March 20, 2023",
        author: "John Doe"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/2.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/3.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
     
    {
        title: "10 Tips for Better Time Management",
        content: "Are you struggling to make the most of your time? Check out these 10 tips for better time management and start getting more done in less time.",
        image: "../img/news/1.jpg",
        date: "March 20, 2023",
        author: "John Doe"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/2.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/3.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
     
    {
        title: "10 Tips for Better Time Management",
        content: "Are you struggling to make the most of your time? Check out these 10 tips for better time management and start getting more done in less time.",
        image: "../img/news/1.jpg",
        date: "March 20, 2023",
        author: "John Doe"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/2.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
      {
        title: "The Benefits of Mindfulness Meditation",
        content: "Mindfulness meditation has been shown to reduce stress, improve focus, and boost overall well-being. Learn more about the benefits and how to get started.",
        image: "../img/news/3.jpg",
        date: "March 15, 2023",
        author: "Jane Smith"
      },
     
                // Add more blog posts here...
  ];
  const postsWrapper = document.querySelector('#posts-wrapper');


    postsWrapper.innerHTML = blogPosts.map(post => `
      <div class="post-card">
        <img src="${post.image}" alt="${post.title}">
        <div class="post-content">
          <h2 class="post-title">${post.title}</h2>
          <p class=" date">${post.date}</p>
          <p class="orange-color post-author">By ${post.author}</p>
          <p class="post-excerpt">${post.content.substring(0, 140)}...</p>
          <a class="read-more-link" href="../single-post/index.html?title={${post.title }}">Read More...</a>
        </div>
      </div>
    `).join('');