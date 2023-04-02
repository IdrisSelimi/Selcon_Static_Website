
const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', () => {
  const selectedValue = languageSelector.value;

  if (selectedValue === 'mk') {
    window.location.href = './mk/home-mk.html';
  } else {
    window.location.href = './index.html';
  }
});

