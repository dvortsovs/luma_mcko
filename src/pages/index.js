import './index.css';

const container = document.querySelector('.content');
const groups = [
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

function setHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[2]}`)).forEach((item) => item.style.backgroundColor = 'rgba(244, 255, 42, 0.7)');
}

function deleteHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[2]}`)).forEach((item) => item.style.backgroundColor = 'rgba(175, 185, 255, 0.7)');
}
groups.forEach((group) => {
    Array.from(group).forEach((item) => item.addEventListener('mouseout', deleteHover));
    Array.from(group).forEach((item) => item.addEventListener('mouseover', setHover));
})
