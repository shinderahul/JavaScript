const ul = document.querySelector('ul');

const button = document.querySelector('.btn');
const items = document.querySelectorAll('li');




button.addEventListener('click', (e) => {
    e.preventDefault
    const inputBox = document.querySelector('.input-box');
    const inputBoxValue = document.querySelector('.input-box').value;
    const li = document.createElement('li')
    if(inputBoxValue !== '') {
        li.classList.add('list-group-item')
        li.textContent = inputBoxValue
        ul.prepend(li)
        inputBox.value = ''
    }
});


ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        e.target.remove()
    }
})