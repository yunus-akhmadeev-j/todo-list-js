import {createElement} from '../framework/render.js';


function createTaskBacklogTemplate() {
    return (
        `<div class="backlog">
                <ul><h3>Backlog</h3>
                    <li class="task1">Выучить JS</li>
                    <li class="task1">Выучить React</li>
                    <li class="task1">Сделать домашку</li>
                </ul>
            </div>`
      );
}


export default class TaskBacklog {
  getTemplate() {
    return createTaskBacklogTemplate();
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
