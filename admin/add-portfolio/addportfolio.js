
const form = document.getElementById("add-post-form");
const serverURL = "http://localhost:5000";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const files = document.getElementById("fileInput").files;

  if (files) {
    const data = new FormData();
    data.append("category", category);
    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }

    try {
     const res = await fetch(`${serverURL}/api/uploadPortfolio`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert('Portfolio added successfully!');
        window.location.href = 'index.html';
      }
    } catch (err) {
      console.error(err);
    }
  }
});

