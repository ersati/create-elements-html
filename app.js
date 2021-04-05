const addButton = document.querySelector('.form--add .form__submit');
const addForm = document.querySelector('.form--add');
const searchResult = document.querySelector('.container--search');
const createResult = document.querySelector('.container--info')

function createElements(e, node, text, attr, value) {
    e.preventDefault();
    console.log(node, text, attr, value)
    const element = document.createElement(node);

    if (text !== '') {
        const textNode = document.createTextNode(text);
        element.appendChild(textNode)

    }
    if (attr !== '' || value !== "") {
        element.setAttribute(attr, value);

    }

    createResult.appendChild(element)

    document.querySelector('input[name=node]').value = ''
    document.querySelector('input[name=txt]').value = ''
    document.querySelector('input[name=attr]').value = ''
    document.querySelector('input[name=value]').value = ''
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
    console.log(e)
    searchResult.innerHTML = '';
    if (allElements.length === 0) {
        searchResult.innerHTML = `<p>No data, please check diffrent element</p>`
    } else {
        allElements.forEach(element => {
            console.log(element.className)
            console.log(element.offsetHeight)
            showElements(element.tagName, element.className, element.offsetHeight, element.id)
        })
    }
    document.querySelector('input[name=search]').value = ''
}

function showElements(tagname, className, offset, id) {
   const divResult = document.createElement('div');
divResult.setAttribute('class', 'container__result')
   const tagNameParagraph = `<p>Tag name: ${tagname}</p>`
   const classNameParagraph = `<p>Class name: ${className}</p>`
   const offsetParagraph = `<p>Element Height: ${offset}</p>`
   const idParagraph = `<p>Id Name: ${id}</p>`;
   divResult.innerHTML += tagNameParagraph;
   divResult.innerHTML += classNameParagraph;
   divResult.innerHTML += offsetParagraph,
   divResult.innerHTML += idParagraph;
   searchResult.appendChild(divResult)


}
searchForm.addEventListener('submit', (e) => {
    searchElements(e, document.querySelector('input[name=search]').value)
})