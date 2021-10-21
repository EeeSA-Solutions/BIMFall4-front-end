const 
const addcomponent = document.querySelector('.addCategory-btn');
addcomponent.addEventListener = () =>{

}

const addCategory = (parent) => {
    const addCategoryContainer = document.createElement('div');
    addCategoryContainer.className='addCategory-container';
    createInput(addCategoryContainer);
    createButton(addCategoryContainer);
    parent.appendChild(addCategoryContainer);
}

const createInput = (parent) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className='addCategory-input';
    parent.appendChild(input);
}

const createButton = (parent) => {
    const btn = document.createElement('button');
    btn.className = 'addCategory-btn';
    parent.appendChild(btn);
}

