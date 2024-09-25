import { createElement } from "../framework/render.js";
import { StatusLabel } from "../const.js";
function createTasksBoardComponentTemplate(status) {
  return (` 
  
   <div class="task-body ${status}">   
 <h3>${StatusLabel[status]}</h3>                 
                    <ul class="task-list">
                        
                    </ul>
                  </div>

  

        

`);}

export default class TasksBoardComponent {
  status;

  constructor({ status }) {
    this.status = status;
  }

  getTemplate() {
    return createTasksBoardComponentTemplate(this.status);
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