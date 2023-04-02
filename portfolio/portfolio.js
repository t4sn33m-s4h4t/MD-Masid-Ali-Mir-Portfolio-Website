
const filterContainer = document.querySelector(".gallery-filter");
const imageContainer = document.getElementById("image-container");
const serverURL = window.config.serverUrl





function showImages(urls) {
  imageContainer.innerHTML = urls.map((url) => {
      imgSrc = serverURL + url
      ImgCat = url.split('_')[0].split("/").pop()
      
      
      return `
					<div class="gallery-item ${ImgCat} "><img src="${imgSrc}"></div>
      `;
    })
    .join("");
}



function FilterImage() {
  const galleryItems = document.getElementsByClassName("gallery-item");
  filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
      
      filterContainer.querySelector(".active").classList.remove("active");
      
      event.target.classList.add("active");
      const filterValue = event.target.getAttribute("data-filter");
      
      for (let i = 0; i < galleryItems.length; i++) {
        const item = galleryItems[i];
        
        if (item.classList.contains(filterValue) || filterValue === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      };
    }
  });
}
fetch(`${serverURL}/api/portfolioImages`)
  .then(response => response.json())
  .then(data => {
    
    FilterImage()
    showImages(data);
  })
  .catch(error => console.error(error));
