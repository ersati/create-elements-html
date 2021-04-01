const addButton = document.querySelector('.form--add .form__submit');
const addForm = document.querySelector('.form--add');
const searchResult = document.querySelector('.container--search');
const createResult = document.querySelector('.container--info')

function createElements(e, node, text, attr, value) {
    e.preventDefault();
    const element = document.createElement(node);
    const textNode = document.createTextNode(text);
    element.appendChild(textNode)
    console.log(element)
    element.setAttribute(attr, value);

    createResult.appendChild(element)
    console.log(e)
    console.log('ok')
}



addForm.addEventListener('submit', (e) => createElements(e,
    document.querySelector('input[name=node]').value,
    document.querySelector('input[name=txt]').value,
    document.querySelector('input[name=attr]').value,
    document.querySelector('input[name=value]').value))

const searchForm = document.querySelector(".form--search");

function searchElements(e, element) {
    e.preventDefault()
const allElements = createResult.querySelectorAll(element)
console.log(allElements)
    console.log(e)

    allElements.forEach(element => {
        console.log(element.className)
        console.log(element.offsetHeight)
    })
}

searchForm.addEventListener('submit', (e) => {
    searchElements(e, document.querySelector('input[name=search]').value)
})