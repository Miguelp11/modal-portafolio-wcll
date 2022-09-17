import {LitElement, html, css} from 'lit';

export class ModalPortafolioWcll extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
 
  static get properties() {
    return {
      title: {type: String},
    };
  }
 
  constructor() {
    super();
    this.title = 'hola mundo';
  }

  render() {
    return html`
     <p>${this.title}</p>
    `;
  }
 }
 
customElements.define('modal-portafolio-wcll', ModalPortafolioWcll);
 