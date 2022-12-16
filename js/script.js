// ? Fungsi untuk shadow pada navbar ketika di scroll 
const navbar = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 0);
});

// ? Fungsi untuk mengganti color pada text di menu navbar di setiap current page
// const menuNavbar = document.querySelector('.menu-navbar');
// const itemsNavbar = menuNavbar.querySelectorAll('.itemNavbar');

// for (let i = 0; i < itemsNavbar.length; i++) {
//     itemsNavbar[i].addEventListener("click", function() {
//         const current = menuNavbar.querySelector(".current");
//         current.className = current.className.replace(" current", "");
//         this.className += " current";
//     });
// }
