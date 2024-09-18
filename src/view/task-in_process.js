import {createElement} from '../framework/render.js';


function createTaskInprocessTemplate() {
    return (
        `<div class="in-process">
                <ul><h3>In progress</h3>
                    <li class="task2">Выпить смузи</li>
                    <li class="task2">Попить воды</li>
                </ul>
            </div>`
      );
}


export default class TaskInprocess {
  getTemplate() {
    return createTaskInprocessTemplate();
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