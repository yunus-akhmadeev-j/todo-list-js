import {createElement} from '../framework/render.js';


function createTaskDoneTemplate() {
    return (
        `<div class="done">
                <ul><h3>Done</h3>
                    <li class="task3">Позвонить маме</li>
                    <li class="task3">Погладить кота</li>
                </ul>
            </div>`
      );
}


export default class TaskDone {
  getTemplate() {
    return createTaskDoneTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
