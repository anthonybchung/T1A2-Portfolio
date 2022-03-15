const buttonMenu = document.getElementById('buttonMenu');
const hamBars = document.getElementById('hamBars');
const slideName = document.getElementById('slideNav');

let menuBool = true;
buttonMenu.addEventListener('click', () => {
  if (menuBool) {
    hamBars.classList.add('close');
    slideName.classList.add('close');
    menuBool = !menuBool;
  } else {
    hamBars.classList.remove('close');
    slideName.classList.remove('close');
    menuBool = !menuBool;
  }
});
