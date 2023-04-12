let lang = window.location.pathname.startsWith('/al/') ? 'al' : (window.location.pathname.startsWith('/mk/') ? 'mk' : 'en');

document.querySelector('#language-selector').value = lang;

document.querySelector('#language-selector').addEventListener('change', function() {

  let lang = this.value;

  let newUrl = '';

  if (lang === 'en') {
    newUrl = '/';
  } else if (lang === 'mk') {
    newUrl = '/mk/home-mk.html';
  } else {
    newUrl = '/al/home-al.html';
  }

  window.location.href = newUrl;
});