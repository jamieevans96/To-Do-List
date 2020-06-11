import {projectList} from './index'

const itemFactory = (title, description, date, priority) => {
    return {title, description, date, priority}
}

let indx;

function renderItemTab(a) {
    removeItemNodes();
    removeEditNodes();

    indx = a;

    for (var i = 0; i < projectList.length; i++) {
        document.getElementById('projectListContainer ' + i).style.background = ('none');
    }
    document.getElementById('projectListContainer ' + indx).style.background = ('rgba(0, 0, 0, 0.10)');

    insertTodoHeader();
    insertEditHeader();

    document.getElementById('btn2').addEventListener('click', newItem, {once: true});

    function deleteTodo(b) {
        projectList[a].todoList.splice(b, 1);
        renderItemTab(a);
    }

    function renderEditTab(b) {
        removeEditNodes();

        for (var i = 0; i < projectList[a].todoList.length; i++) {
            document.getElementById('todoListContainer ' + i).style.background = ('none');
        }
        document.getElementById('todoListContainer ' + b).style.background = ('rgba(0, 0, 0, 0.10)');
    
        insertEditHeader();   
        
        document.getElementById('btn3').addEventListener('click', function() {editTodo(b)});
    
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('editList');
    
        let innerDiv1 = document.createElement('div');
        let innerDiv1Header = document.createElement('h3');
        innerDiv1Header.innerHTML = 'Title';
        let innerDiv1Div = document.createElement('div');
        innerDiv1Div.innerHTML = projectList[a].todoList[b].title;
    
        let innerDiv2 = document.createElement('div');
        let innerDiv2Header = document.createElement('h3');
        innerDiv2Header.innerHTML = 'Description';
        let innerDiv2Div = document.createElement('div');
        innerDiv2Div.innerHTML = projectList[a].todoList[b].description;
        
    
        let innerDiv3 = document.createElement('div');
        let innerDiv3Header = document.createElement('h3');
        innerDiv3Header.innerHTML = 'Date';
        let innerDiv3Div = document.createElement('div');
        innerDiv3Div.innerHTML = projectList[a].todoList[b].date;
    
        let innerDiv4 = document.createElement('div');
        let innerDiv4Header = document.createElement('h3');
        innerDiv4Header.innerHTML = 'Priority';
        let innerDiv4Div = document.createElement('div');
        innerDiv4Div.innerHTML = projectList[a].todoList[b].priority;
    
        document.getElementById('editContainer').appendChild(outerDiv);
        outerDiv.append(innerDiv1, innerDiv2, innerDiv3, innerDiv4);
        innerDiv1.append(innerDiv1Header, innerDiv1Div);
        innerDiv2.append(innerDiv2Header, innerDiv2Div);
        innerDiv3.append(innerDiv3Header, innerDiv3Div);
        innerDiv4.append(innerDiv4Header, innerDiv4Div);
    }

    function newItem() {
        removeEditNodes();
        insertEditHeader();
    
        document.getElementById('btn3').addEventListener('click', function() {editTodo(b)});
    
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('editList');
    
        let innerDiv1 = document.createElement('div');
        let innerDiv1Header = document.createElement('h3');
        innerDiv1Header.innerHTML = 'Title';
        let innerDiv1Input = document.createElement('input');
        innerDiv1Input.setAttribute('type', 'text');
        innerDiv1Input.setAttribute('id', 'title');
    
        let innerDiv2 = document.createElement('div');
        let innerDiv2Header = document.createElement('h3');
        innerDiv2Header.innerHTML = 'Description';
        let innerDiv2Input = document.createElement('input');
        innerDiv2Input.setAttribute('type', 'text');
        innerDiv2Input.setAttribute('id', 'desc');
    
        let innerDiv3 = document.createElement('div');
        let innerDiv3Header = document.createElement('h3');
        innerDiv3Header.innerHTML = 'Due Date';
        let innerDiv3Input = document.createElement('input');
        innerDiv3Input.setAttribute('type', 'date');
        innerDiv3Input.setAttribute('id', 'date');
    
        let innerDiv4 = document.createElement('div');
        let innerDiv4Header = document.createElement('h3');
        innerDiv4Header.innerHTML = 'Priority';
        let innerDiv4Select = document.createElement('select');
        innerDiv4Select.setAttribute('name', 'priority');
        innerDiv4Select.setAttribute('id', 'priority');
        let innerDiv4SelectOption1 = document.createElement('option');
        innerDiv4SelectOption1.setAttribute('value', 'High');
        innerDiv4SelectOption1.innerHTML = 'High';
        let innerDiv4SelectOption2 = document.createElement('option');
        innerDiv4SelectOption2.setAttribute('value', 'Med');
        innerDiv4SelectOption2.innerHTML = 'Med';
        let innerDiv4SelectOption3 = document.createElement('option');
        innerDiv4SelectOption3.setAttribute('value', 'Low');
        innerDiv4SelectOption3.innerHTML = 'Low';
    
        let button = document.createElement('button');
        button.classList.add('c');
        button.innerHTML = '✔';
        button.addEventListener('click', function submitTodo() {
            let title = document.getElementById('title').value;
            let desc = document.getElementById('desc').value;
            let dueDate = document.getElementById('date').value;
            let priority = document.getElementById('priority').value;
    
            const newTodo = itemFactory(title, desc, dueDate, priority);
    
            projectList[indx].todoList.push(newTodo);
            renderItemTab(indx);
            removeEditNodes();
            insertEditHeader();

            console.log(projectList);
        });
    
        document.getElementById('editContainer').appendChild(outerDiv);
        outerDiv.append(innerDiv1, innerDiv2, innerDiv3, innerDiv4, button);
        innerDiv1.append(innerDiv1Header, innerDiv1Input);
        innerDiv2.append(innerDiv2Header, innerDiv2Input);
        innerDiv3.append(innerDiv3Header, innerDiv3Input);
        innerDiv4.append(innerDiv4Header, innerDiv4Select);
        innerDiv4Select.append(innerDiv4SelectOption1, innerDiv4SelectOption2, innerDiv4SelectOption3);
    }

    function editTodo(b) {
        removeEditNodes();
        insertEditHeader();
        
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('editList');
    
        let innerDiv1 = document.createElement('div');
        let innerDiv1Header = document.createElement('h3');
        innerDiv1Header.innerHTML = 'Title';
        let innerDiv1Input = document.createElement('input');
        innerDiv1Input.setAttribute('type', 'text');
        innerDiv1Input.setAttribute('id', 'title');
        innerDiv1Input.setAttribute('value', projectList[a].todoList[b].title);
    
        let innerDiv2 = document.createElement('div');
        let innerDiv2Header = document.createElement('h3');
        innerDiv2Header.innerHTML = 'Description';
        let innerDiv2Input = document.createElement('input');
        innerDiv2Input.setAttribute('type', 'text');
        innerDiv2Input.setAttribute('id', 'desc');
        innerDiv2Input.setAttribute('value', projectList[a].todoList[b].description);
    
        let innerDiv3 = document.createElement('div');
        let innerDiv3Header = document.createElement('h3');
        innerDiv3Header.innerHTML = 'Due Date';
        let innerDiv3Input = document.createElement('input');
        innerDiv3Input.setAttribute('type', 'date');
        innerDiv3Input.setAttribute('id', 'date');
        innerDiv3Input.setAttribute('value', projectList[a].todoList[b].date);
    
        let innerDiv4 = document.createElement('div');
        let innerDiv4Header = document.createElement('h3');
        innerDiv4Header.innerHTML = 'Priority';
        let innerDiv4Select = document.createElement('select');
        innerDiv4Select.setAttribute('name', 'priority');
        innerDiv4Select.setAttribute('id', 'priority');
        innerDiv4Select.setAttribute('value', projectList[a].todoList[b].priority);
        let innerDiv4SelectOption1 = document.createElement('option');
        innerDiv4SelectOption1.setAttribute('value', 'high');
        innerDiv4SelectOption1.innerHTML = 'High';
        let innerDiv4SelectOption2 = document.createElement('option');
        innerDiv4SelectOption2.setAttribute('value', 'med');
        innerDiv4SelectOption2.innerHTML = 'Med';
        let innerDiv4SelectOption3 = document.createElement('option');
        innerDiv4SelectOption3.setAttribute('value', 'low');
        innerDiv4SelectOption3.innerHTML = 'Low';
    
        let button = document.createElement('button');
        button.classList.add('c');
        button.innerHTML = 'Submit';
        button.addEventListener('click', function submitTodo() {
            let title = document.getElementById('title').value;
            let desc = document.getElementById('desc').value;
            let date = document.getElementById('date').value;
            let priority = document.getElementById('priority').value;
    
            projectList[a].todoList[b].title = title;
            projectList[a].todoList[b].description = desc;
            projectList[a].todoList[b].date = date;
            projectList[a].todoList[b].priority = priority;
            
            renderItemTab(indx);
            removeEditNodes();
            insertEditHeader();
        });
    
        document.getElementById('editContainer').appendChild(outerDiv);
        outerDiv.append(innerDiv1, innerDiv2, innerDiv3, innerDiv4, button);
        innerDiv1.append(innerDiv1Header, innerDiv1Input);
        innerDiv2.append(innerDiv2Header, innerDiv2Input);
        innerDiv3.append(innerDiv3Header, innerDiv3Input);
        innerDiv4.append(innerDiv4Header, innerDiv4Select);
        innerDiv4Select.append(innerDiv4SelectOption1, innerDiv4SelectOption2, innerDiv4SelectOption3);
    }

    projectList[a].todoList.forEach(function render(item, index) {
        let outerDiv = document.createElement('div');
        let innerDiv = document.createElement('div');
        let button = document.createElement('div');
        let innerDiv2 = document.createElement('div');
        let innerDiv3 = document.createElement('div');
        let innerDiv4 = document.createElement('div');
        let input = document.createElement('input');
        let header = document.createElement('h3');
        
        button.addEventListener('click', function() {deleteTodo(index)});
        header.addEventListener('click', function() {renderEditTab(index)});

        outerDiv.setAttribute('id', 'todoListContainer ' + index)
        outerDiv.classList.add('todoList');
        innerDiv2.classList.add('todoListHeader')
        button.classList.add('d');
        input.classList.add('checkbox');
        input.setAttribute('type', 'checkbox');

        header.innerHTML = item.title;
        button.innerHTML = '🗑';
        innerDiv3.innerHTML = item.date;
        innerDiv4.innerHTML = item.priority;

        outerDiv.appendChild(innerDiv);
        outerDiv.appendChild(button);
        innerDiv.appendChild(innerDiv2);
        innerDiv.appendChild(innerDiv3);
        innerDiv.appendChild(innerDiv4);
        innerDiv2.appendChild(input);
        innerDiv2.appendChild(header);

        document.getElementById('todoContainer').appendChild(outerDiv);
    })
}

function removeItemNodes() {
    var temp = document.getElementById("todoContainer");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }
}

function removeEditNodes() {
    var temp = document.getElementById("editContainer");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    } 
}

function insertTodoHeader() {
    let title = document.createElement('h1');
    let button = document.createElement('button');
    title.innerHTML = 'List Items';
    button.innerHTML = '+';
    button.classList.add('b');
    button.setAttribute('id', 'btn2');
    // button.addEventListener('click', newItem, {once: true});
    title.appendChild(button);
    document.getElementById('todoContainer').appendChild(title);
}

function insertEditHeader(b) {
    let title = document.createElement('h1');
    let button2 = document.createElement('button');
    title.innerHTML = 'View/Edit Item';
    button2.innerHTML = '✎';
    button2.classList.add('b');
    button2.setAttribute('id', 'btn3');
    // button2.addEventListener('click', function() {editTodo(b)});
    title.appendChild(button2);
    document.getElementById('editContainer').appendChild(title);
}

export {
    renderItemTab,
    indx,
    removeEditNodes,
    insertEditHeader
}  