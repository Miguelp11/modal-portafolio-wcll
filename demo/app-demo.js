import { LitElement, html, css } from 'lit';
import '../modal-portfolio-wcll';

class AppDemo extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button @click="${this.openModalDefault}">Abrir Modal</button>
      <modal-portfolio-wcll id="modal-default"></modal-portfolio-wcll>
    `;
  }

  openModalDefault() {
    const modal = this.shadowRoot.querySelector('#modal-default');
    console.log(modal);
    modal.isOpen = true;
  }
}

customElements.define('app-demo', AppDemo);