import {renderProjectTab, newProject} from './projectTab'
import {renderItemTab, itemFactory} from './itemTab'

let projectList = [{name: 'Default Project', todoList: [{title: 'Mow the lawn', description: 'The grass is too long, it needs cutting', date: '2020-06-15', priority: 'High'}, {title: 'Fix the table', description: 'Dining room table is rocking. Needs fixing.', date: '2020-06-20', priority: 'Low'}]}];

document.getElementById('btn').addEventListener('click', newProject, {once: true});

document.getElementById('delBtn').addEventListener('click', function deleteProject() {
    projectList.splice(0, 1);
    renderProjectTab();
});

document.getElementById('header').addEventListener('click', function() {renderItemTab(0)});

export {projectList}