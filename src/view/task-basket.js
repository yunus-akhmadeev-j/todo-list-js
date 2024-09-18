import {createElement} from '../framework/render.js';


function createTaskBasketTemplate() {
    return (
        `<div class="in-basket">
                <ul><h3>Basket</h3>
                    <li class="task4">Сходить погулять</li>
                    <li class="task4">Прочитать Войну и Мир</li>
                    <div class="clear-button">
                        <button class="button-clear">
                            <a href="#">
                                <p class="clear-button-text">Очистить</p>
                            </a>
                        </button>
                    </div> 
                </ul>
            </div>`
      );
}


export default class TaskBasket {
  getTemplate() {
    return createTaskBasketTemplate();
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
