// Javascript untuk mengambil element nav
const nav = document.querySelector('nav');

// Javascript untuk menambahkan class "active" ke link yang sedang aktif
const currentLink = window.location.href;
const links = nav.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentLink) {
    links[i].className = 'active';
  }
}
