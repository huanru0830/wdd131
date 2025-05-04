const themeSelector = document.querySelector('#theme');
const body          = document.body;
const logo          = document.querySelector('#logo');

const BLUE_LOGO  = 'byui-logo_blue.webp';
const WHITE_LOGO = 'byui-logo_white.webp';

function changeTheme() {
  const selected = themeSelector.value;

  if (selected === 'dark') {
    body.classList.add('dark');
    logo.src = WHITE_LOGO;
  } else {
    body.classList.remove('dark');
    logo.src = BLUE_LOGO;
  }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();
