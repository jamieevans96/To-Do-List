import {projectList} from './index'

const itemFactory = (title, description, deadline, priority) => {
    return {title, description, deadline, priority}
}

function renderItemTab(a) {
    var temp = document.getElementById("todoContainer");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }

    let title = document.createElement('h1');
    let button = document.createElement('button');
    title.innerHTML = 'List Items';
    button.innerHTML = '+';
    button.classList.add('b');
    button.setAttribute('id', 'btn2');
    // button.addEventListener('click', newItem, {once: true});
    title.appendChild(button);
    document.getElementById('todoContainer').appendChild(title);

    console.log(projectList);

    projectList[a].todoList.forEach(function render(item) {
        
        // alert(item.title);
    })
}

export {
    renderItemTab,
}  