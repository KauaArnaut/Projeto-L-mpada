const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampbroken() {
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
  if(!isLampbroken()) {
  lamp.src = './img/ligada.jpg'
  }
}

function lampOf() {
  if(!isLampbroken()) {
  lamp.src = './img/desligada.jpg'
  }
}

function lampBroken(){
  lamp.src = './img/quebrada.jpg'
}

function lampOnOff() {
  if(turnOnOff.textContent == 'Ligar') {
    lampOn()
    turnOnOff.textContent = 'Desligar'
  }else{
    lampOf()
    turnOnOff.textContent = 'Ligar'
  }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)
lamp.addEventListener('dblclick', lampBroken)