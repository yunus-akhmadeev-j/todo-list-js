import HeaderComponent from "./view/header.js";
import FormAddTaskComponent from "./view/task-adder.js";
import TasksBoardPresenter  from "./presenter/tasks-board-presenter.js";
import TaskBasket from "./view/task-basket.js";
import { render, RenderPosition } from "./framework/render.js";

import TasksModel from "./model/task-model.js";



const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".newtask-add-button");
const taskBoardContainer = document.querySelector(".tasks");
const basketContainer = document.querySelector(".clear-button");







const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  taskBoardContainer: taskBoardContainer,
  tasksModel: tasksModel,
});
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);

render(new TaskBasket(), basketContainer);
tasksBoardPresenter.init();