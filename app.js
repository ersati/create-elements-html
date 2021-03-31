const addButton = document.querySelector('.form--add .form__submit');
const addForm = document.querySelector('.form--add');

function createElements(e, node = "div", text = "tekst", attr = "class", value = "big") {
    e.preventDefault();
    const element = document.createElement(node);
    element.textContent = text;
    console.log(element)
    element.setAttribute(attr, value);

    
    console.log(e)
    console.log('ok')
}



addForm.addEventListener('submit', (e) => createElements(e,
    document.querySelector('input[name=node]').value,
    document.querySelector('input[name=txt]').value,
    document.querySelector('input[name=attr]').value,
    document.querySelector('input[name=value]').value))

const searchForm = document.querySelector(".form--search");

function searchElements(e) {
    e.preventDefault()
    console.log(e)
}

searchForm.addEventListener('submit', (e) => {
    searchElements(e)
})