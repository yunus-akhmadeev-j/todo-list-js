import HeaderComponent from "./view/header.js";
import FormAddTaskComponent from "./view/task-adder.js";
import TaskBoardComponent  from "./view/tasks-board.js";
import TaskBasket from "./view/task-basket.js";
import { render, RenderPosition } from "./framework/render.js";




const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".newtask-add-button");
const taskboardContainer = document.querySelector(".tasks");
const basketContainer = document.querySelector(".clear-button");




render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBoardComponent(), taskboardContainer);
render(new TaskBasket(), basketContainer);


