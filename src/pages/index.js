import './index.css';

const config = {
  urls:{
    statusRadioRoom: 'http://192.168.60.10/pstat.xml',
    roomAdres: 'http://192.168.60.10/rb',
    zeroRoomRele: 'http://192.168.60.10/rb0',
    firstRoomRele: 'http://192.168.60.10/rb1',
    secondRoomRele: 'http://192.168.60.10/rb2',
    thirdRoomRele: 'http://192.168.60.10/rb3',
  }
}

const container = document.querySelector('.content');
const hall = container.querySelector('.hall');
const room = container.querySelector('.radio-room');
const hallLink = container.querySelector('.nav-btn_hall');
const roomLink = container.querySelector('.nav-btn_room');

const groupsLightHall = [
  container.querySelectorAll('.one'),
  container.querySelectorAll('.two'),
  container.querySelectorAll('.third'),
  container.querySelectorAll('.four'),
  container.querySelectorAll('.five'),
  container.querySelectorAll('.six'),
  container.querySelectorAll('.seven'),
  container.querySelectorAll('.eight'),
  container.querySelectorAll('.nine'),
  container.querySelectorAll('.ten')
]

const roomBtns = [
  container.querySelector('.room-btn-one'),
  container.querySelector('.room-btn-two'),
  container.querySelector('.room-btn-three'),
  container.querySelector('.room-btn-four'),
]

function checkActiveRele(url) {
  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((str) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(str, 'text/xml');
      return Array.from(xml.all);
    })
    .then((arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          console.log('pass');
        } else {
          if (arr[i].textContent === '0') {
            roomBtns[i-1].classList.remove('radio-room__btn_active');
          } else {
            roomBtns[i-1].classList.add('radio-room__btn_active');
          }
        }
      }
    })
}

function toggleLight(url, target) {
  console.log(target.classList.toString().split(' ')[2])
  let rele = ''
  switch (target.classList.toString().split(' ')[2]) {
    case 'room-btn-one':
      rele = '0';
      break;
    case 'room-btn-two':
      rele = '1';
      break;
    case 'room-btn-three':
      rele = '2';
      break;
    case 'room-btn-four':
      rele = '3';
      break;
  }
  if (target.classList.contains('radio-room__btn_active')) {
    fetch(`${url}${rele}f.cgi`)
      .then((ans) => {
        checkActiveRele(config.urls.statusRadioRoom);
        return ans
      })
  } else {
    fetch(`${url}${rele}n.cgi`)
      .then((ans) => {
        checkActiveRele(config.urls.statusRadioRoom);
        return ans
      })
  }
}

function setHover(evt) {
  const target = evt.target.className.split(' ');
  Array.from(container.querySelectorAll(`.${target[2]}`)).forEach((item) => item.style.backgroundColor = 'rgba(244, 255, 42, 0.7)');
}

function deleteHover(evt) {
  const target = evt.target.className.split(' ');
  Array.from(container.querySelectorAll(`.${target[2]}`)).forEach((item) => item.style.backgroundColor = 'rgba(175, 185, 255, 0.7)');
}

function changePage(evt) {
  if (evt.target.classList.contains('nav-btn_hall')) {
    room.classList.remove('active-page');
    hall.classList.add('active-page');
  } else {
    hall.classList.remove('active-page');
    room.classList.add('active-page');
  }
}

hallLink.addEventListener('click', changePage);
roomLink.addEventListener('click', changePage);

groupsLightHall.forEach((group) => {
  Array.from(group).forEach((item) => item.addEventListener('mouseout', deleteHover));
  Array.from(group).forEach((item) => item.addEventListener('mouseover', setHover));
});

roomBtns.forEach((btn) => btn.addEventListener('click',(evt) => {
  toggleLight(config.urls.roomAdres, evt.target);
}))

checkActiveRele(config.urls.statusRadioRoom);
