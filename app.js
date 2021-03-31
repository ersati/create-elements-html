const addButton = document.querySelector('.form--add .form__submit');
console.log(addButton)
const createElements = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = createElements(node);
    const text = element.createTextNode(txt);
    element.setAttribute(attr, value);
    // console.log(element)
    console.log(e)
    console.log('ok')
}



addButton.addEventListener('submit', (e)=> createElements(e, 
    document.querySelector('input[name=node]').value,
document.querySelector('input[name=txt]').value,
document.querySelector('input[name=attr]').value,
document.querySelector('input[name=value]').value))