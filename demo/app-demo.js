import { LitElement, html, css } from 'lit';
import '../modal-portafolio-wcll';

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
      <modal-portafolio-wcll> </modal-portafolio-wcll>
    `;
  }
}

customElements.define('app-demo', AppDemo);