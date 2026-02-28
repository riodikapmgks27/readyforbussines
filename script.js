<script>
function toggleMenu(){
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}
</script>
// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=>{
  navMenu.classList.toggle('active');
});

// Smooth scroll anchor
document.querySelectorAll('.nav-menu a, .dropdown-content a').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({top: targetPosition, behavior: 'smooth'});
      if(navMenu.classList.contains('active')){
        navMenu.classList.remove('active'); // tutup menu di mobile
      }
    }
  });
});
// Toggle menu mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', ()=>{
  navMenu.classList.toggle('active');
});

// Smooth scroll untuk anchor
document.querySelectorAll('.nav-menu a, .dropdown-content a').forEach(link=>{
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({top: targetPosition, behavior: 'smooth'});
      // Tutup menu mobile setelah klik
      if(navMenu.classList.contains('active')){
        navMenu.classList.remove('active');
      }
    }
  });
});
document.querySelectorAll('.navbar-collection .dropdown-content a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      const navbarHeight = document.querySelector('.navbar-collection').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({top: targetPosition, behavior: 'smooth'});
    }
  });
});
