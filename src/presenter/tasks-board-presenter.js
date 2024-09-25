import TaskBoardComponent from "../view/tasks-board.js";
import TaskComponent from "../view/tasks-component.js";

import { render } from "../framework/render.js";
import { Status } from "../const.js";



export default class TasksBoardPresenter {
  taskBoardContainer;
  taskListComponent;
  tasksModel;

  constructor({ taskBoardContainer, tasksModel }) {
    this.taskBoardContainer = taskBoardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    const tasks = [...this.tasksModel.getTasks()];

    for (let key in Status) {
      const taskBoardComponent = new TaskBoardComponent({
        status: Status[key],
      });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === Status[key]
      );

      render(taskBoardComponent, this.taskBoardContainer);

      for (let key in tasksInCurrentStatus) {
        const taskComponent = new TaskComponent({
          task: tasksInCurrentStatus[key],
        });
        render(taskComponent, taskBoardComponent.getElement());
      }
    }

    
  }}
