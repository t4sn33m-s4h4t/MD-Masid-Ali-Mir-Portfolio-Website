const navbar = document.querySelector('#mynav');
const clientUrl = "file:///C:/Users/HP/Desktop/tasneem"

navbar.innerHTML=`
<div class="logo">Brand</div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <div class="bar-icon">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </label>
      <ul>
        <li><a class="active" href="${clientUrl}/index.html">Home</a></li>
        <li><a href="${clientUrl}/index.html#about">About</a></li>
        <li><a href="${clientUrl}/index.html#skill">Skill</a></li>
        <li><a href="${clientUrl}/index.html#service">Service</a></li>
        <li><a href="${clientUrl}/portfolio/index.html">Portfolio</a></li>
        <li><a href="${clientUrl}/blog/index.html">Blog</a></li>
        <li><a href="${clientUrl}/index.html#contact">Contact</a></li>
        
      </ul>

`


      
   










window.onscroll = () => {
    if (window.scrollY > 70) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};