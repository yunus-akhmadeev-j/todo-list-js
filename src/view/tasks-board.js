import { createElement } from "../framework/render.js";

function createTaskBoardComponentTemplate() {
  return (` 
  
  

  <section class="ttt">
  <div class="task-body">
      <ul class="task-list"><h3>Backlog</h3>
          <li class="task-ex">Выучить JS</li>
                    <li class="task-ex">Выучить React</li>
                    <li class="task-ex">Сделать домашку</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list"><h3>In progress</h3>
           <li class="task-ex">Выпить смузи</li>
                    <li class="task-ex">Попить воды</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list"><h3>Done</h3>
          <li class="task-ex">Позвонить маме</li>
                    <li class="task-ex">Погладить кота</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list"><h3>Basket</h3>
          <li class="task-ex">Сходить погулять</li>
                    <li class="task-ex">Прочитать Войну и Мир</li>
          
      </ul>
  </div>
         </section>   

`);
}

export default class TaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
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