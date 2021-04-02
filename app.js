const addButton = document.querySelector('.form--add .form__submit');
const addForm = document.querySelector('.form--add');
const searchResult = document.querySelector('.container--search');
const createResult = document.querySelector('.container--info')

function createElements(e, node, text, attr, value) {
    e.preventDefault();
    console.log(node,text,attr,value)
    const element = document.createElement(node);
  
    if(text !== ''){
        const textNode = document.createTextNode(text);
        element.appendChild(textNode)

    }
    if(attr !== '' || value !== ""){
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
if(allElements.length === 0 ){
    searchResult.innerHTML = `<p>No data, please check diffrent element</p>`
} else {
    allElements.forEach(element => {
        console.log(element.className)
        console.log(element.offsetHeight)
        showElements(element.className, element.offsetHeight, element.id)
    })
}
document.querySelector('input[name=search]').value = ''
}
function showElements(className, offset, id){
    const classNameParagraph = `<p>Name of Class: ${className}</p>`
    const offsetParagraph = `<p>Height of element: ${offset}</p>`
    const idParagraph = `<p>Name of id: ${id}</p>`;
    searchResult.innerHTML += classNameParagraph;
    searchResult.innerHTML += offsetParagraph,
    searchResult.innerHTML += idParagraph;
    

}
searchForm.addEventListener('submit', (e) => {
    searchElements(e, document.querySelector('input[name=search]').value)
})