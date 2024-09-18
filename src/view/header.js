import {createElement} from '../framework/render.js';


function createHeaderContTemplate() {
    return (
        `<div class="header">
        <h1>Список задач</h1>
    </div>`
      );
}


export default class HeaderCont {
  getTemplate() {
    return createHeaderContTemplate();
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
