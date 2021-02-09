const linkContainer = document.getElementById("navbar");
const links = linkContainer.getElementsByClassName("sidebar__navbar--link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("sidebar__navbar--link--active");
    current[0].className = current[0].className.replace("sidebar__navbar--link--active", "");
    this.className += " sidebar__navbar--link--active";
  });
}
