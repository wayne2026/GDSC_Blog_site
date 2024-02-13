function toggleIcons(container) {
    var icon1 = container.querySelector(".icon1");
    var icon2 = container.querySelector(".icon2");
  
    var icon1IsVisible = window.getComputedStyle(icon1).display !== "none";
  
    if (icon1IsVisible) {
      icon1.style.display = "none";
      icon2.style.display = "block";
    } else {
      icon1.style.display = "block";
      icon2.style.display = "none";
    }
  }

  const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});