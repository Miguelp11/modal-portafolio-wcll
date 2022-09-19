import {LitElement, html, css} from 'lit';

export class ModalPortafolioWcll extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
      }
      .modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
      }
      .modal-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto 2fr;
        /* grid-template-rows: repeat(2, 1fr); */
        /* display: flex;
        flex-direction: column;
        align-content: center; */
        height: 90vh;
        width: 90vw;
        max-width: 1200px;
        max-height: 900px;
        background-color: #fff;
        /* margin: 30px auto; */
        /* overflow: scroll; */
        border-radius: 5px;
        padding: 10px;
      }
      .modal-close {
        grid-column: 12/13;
        text-align: center;
        border-bottom: 1px solid #d1d1d1;
        padding-top: 16px;
        cursor: pointer;
      }
      .modal-title {
        grid-column: 1/12;
        grid-row: 1/2;
        text-align: center;
        border-bottom: 1px solid #d1d1d1;
        font-weight: bold;
        text-transform: uppercase;
      }
      .openModal {
        opacity: 1;
      }
      .modal-img {
        grid-column: 1/10;
        grid-row: 2/3;
      }
      .modal-info {
        grid-column: 10/13;
        grid-row: 2/3;
      }
      .modal-info h3 {
        text-align: center;
      }
      .line {
        background-color: #0563BB;
        width: 100px;
        height: 3px;
        margin: 10px auto;
      }
    `;
  }
 
  static get properties() {
    return {
      title: {type: String},
      isOpen: {type: Boolean},
      details: {type: Object}
    };
  }
 
  constructor() {
    super();
    this.title = 'Nombre de tu proyecto';
    this.isOpen = false;
    this.details = {
     'Nombre': 'Mi primer proyecto',
     'Url': 'www.url.com'
    };
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? 'openModal' : ''}">
        <div class="modal-content">
          <div class="modal-close" @click="${this.closeModal}">X</div>
          <div class="modal-title">
            <p>${this.title}</p>
          </div>
          <div class="modal-img">
            <img src="" alt="${this.title}">
          </div>
          <div class="modal-info">
            <h3>Información del proyecto</h3>
            ${this._getDetailsProyect()}
            <div class="line"></div>
            <h3>Detalles del proyecto</h3>
            <div class="line"></div>
          </div>
        </div>
    </div>
    `;
  }

  closeModal() {
    this.isOpen = false;
  }

  _getDetailsProyect() {
    const dataDetails = Object.entries(this.details);
    return dataDetails.map(data => html `<p class="cat">${data[0]} : <span>${data[1]} </span></p>`);
  }

 }
 
customElements.define('modal-portafolio-wcll', ModalPortafolioWcll);
 