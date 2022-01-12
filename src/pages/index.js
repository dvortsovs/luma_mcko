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
    container.querySelectorAll('.nine')
]

function setHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[1]}`)).forEach((item) => item.style.opacity = '0.2');
}

function deleteHover(evt) {
    const target = evt.target.className.split(' ');
    Array.from(container.querySelectorAll(`.${target[1]}`)).forEach((item) => item.style.opacity = '1');
}
groups.forEach((group) => {
    Array.from(group).forEach((item) => item.addEventListener('mouseout', deleteHover));
    Array.from(group).forEach((item) => item.addEventListener('mouseover', setHover));
})
