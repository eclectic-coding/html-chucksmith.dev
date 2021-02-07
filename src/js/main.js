const linkContainer = document.getElementById("navbar");
const links = linkContainer.getElementsByClassName("navbar__link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("navbar__link--active");
    current[0].className = current[0].className.replace("navbar__link--active", "");
    this.className += " navbar__link--active";
  });
}
