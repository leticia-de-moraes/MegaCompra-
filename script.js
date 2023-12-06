function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle('light');

  const logotipo = document.querySelector('#logotipo');
  const logo = document.querySelector('#logo');

  if(html.classList.contains('light')){
    logotipo.setAttribute('src', './assets/logotipo-light.png');
    logo.setAttribute('src', './assets/logo-light.png');
  }else{
    logotipo.setAttribute('src', './assets/logotipo.png');
    logo.setAttribute('src', './assets/logo.png');
  }
}