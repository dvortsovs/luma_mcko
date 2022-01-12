import './index.css';

const container = document.querySelector('.content')
const five = container.querySelectorAll('.five');

function setHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[1]}`)).forEach((item) => item.style.opacity = '0.2');
}

function deleteHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[1]}`)).forEach((item) => item.style.opacity = '1');
}

Array.from(five).forEach((item) => item.addEventListener('mouseover', setHover));
Array.from(five).forEach((item) => item.addEventListener('mouseout', deleteHover));