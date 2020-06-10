import {renderProjectTab, newProject} from './projectTab'
import itemFactory from './itemTab'

let projectList = [{name: 'Default Projecy', todoList: [{title: 'todo1', description: 'default', date: '01/10/20', priority: 'high'}]}];

document.getElementById('btn').addEventListener('click', newProject, {once: true});

export {projectList}