
let lang = window.location.pathname.startsWith('/mk/') ? 'mk' : 'en';

document.querySelector('#language-selector').value = lang;

document.querySelector('#language-selector').addEventListener('change', function() {

  let lang = this.value;

  let newUrl = '';

  if (lang === 'en') {
    newUrl = '/';
  } else {
    newUrl = '/mk/home-mk.html';
  }

  window.location.href = newUrl;
});
