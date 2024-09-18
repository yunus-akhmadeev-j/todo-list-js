
import {render, RenderPosition} from './framework/render.js';



import HeaderCont from './view/header.js';
import TaskAdder from './view/task-adder.js';
import TaskBacklog from './view/task-backlog.js';
import TaskBasket from './view/task-basket.js';
import TaskDone from './view/task-done.js';
import TaskInprocess from './view/task-in_process.js';
import ContainerCont from './view/container.js';






const bodyContainer= document.querySelector('.header');
const taskformContainer=document.querySelector('.newtask-add-button');
const taskbacklogContainer=document.querySelector('.backlog');
const taskbasketContainer=document.querySelector('.in-basket');
const taskdoneContainer=document.querySelector('.done');
const taskinprocessContainer=document.querySelector('.in-process');
const containerContainer=document.querySelector('.main');


render(new HeaderCont(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new TaskAdder(), taskformContainer,  RenderPosition.BEFOREBEGIN);
render(new TaskBacklog(), taskbacklogContainer,  RenderPosition.BEFOREBEGIN);
render(new TaskBasket(), taskbasketContainer,  RenderPosition.BEFOREBEGIN);
render(new TaskDone(), taskdoneContainer, RenderPosition.BEFOREBEGIN);
render(new TaskInprocess(), taskinprocessContainer, RenderPosition.BEFOREBEGIN);
render(new ContainerCont(), containerContainer);

