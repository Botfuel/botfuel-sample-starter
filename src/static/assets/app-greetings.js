class Greetings extends HTMLElement {
  constructor() {
    super();
    alert('Hello world!');
  }
}

window.customElements.define('app-greetings', Greetings);
