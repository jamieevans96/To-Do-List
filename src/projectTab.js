import {projectList} from './index'
import {renderItemTab} from './itemTab'

const projectFactory = (name, todoList) => {
    return {name, todoList}
}

function renderProjectTab() {
    var temp = document.getElementById("projectContainer");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }
    
    let title = document.createElement('h1');
    let button = document.createElement('button');
    title.innerHTML = 'Projects';
    button.innerHTML = '+';
    button.classList.add('a');
    button.setAttribute('id', 'btn');
    button.addEventListener('click', newProject, {once: true});
    title.appendChild(button);
    document.getElementById('projectContainer').appendChild(title);

    projectList.forEach(function render(item, index) {
        let outerDiv = document.createElement('div');
        let innerDiv = document.createElement('div');
        let button = document.createElement('div');
        let header = document.createElement('h3');

        innerDiv.classList.add('projectList');
        button.classList.add('d');
        button.innerHTML = '🗑';
        button.addEventListener('click', function deleteProject() {
            projectList.splice(index, 1);
            renderProjectTab();
        });
        header.innerHTML = item.name;
        header.addEventListener('click', function() {renderItemTab(index)});

        outerDiv.appendChild(innerDiv);
        innerDiv.appendChild(header);
        document.getElementById('projectContainer').appendChild(outerDiv);
        document.getElementById('projectContainer').appendChild(button);
    })
}

function newProject() {
    let outerDiv = document.createElement('div');
    let innerDiv = document.createElement('div');
    let button = document.createElement('button');
    let input = document.createElement('input');

    innerDiv.classList.add('projectList');
    button.classList.add('a');
    input.setAttribute('id', 'projectInput');
    button.innerHTML = '✔';
    button.addEventListener('click', function confirmProject() {
        let projectName = document.getElementById('projectInput').value;
        let newProject = projectFactory(projectName, [])
        projectList.push(newProject);
        renderProjectTab();
    });

    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(input);
    document.getElementById('projectContainer').appendChild(outerDiv);
    document.getElementById('projectContainer').appendChild(button);
}

export {
    renderProjectTab,
    newProject,
}   