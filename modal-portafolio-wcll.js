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
        grid-template-rows: auto repeat(2, 1fr);
        /* grid-template-rows: repeat(2, 1fr); */
        /* display: flex;
        flex-direction: column;
        align-content: center; */
        height: 90vh;
        width: 90vw;
        max-width: 1024px;
        max-height: 720px;
        background-color: #fff;
        /* margin: 30px auto; */
        /* overflow: scroll; */
        border-radius: 5px;
        padding: 10px;
      }
      .modal-content-whimage {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto 1fr;
        height: 90vh;
        width: 90vw;
        max-width: 1024px;
        max-height: 720px;
        background-color: #fff;
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
        grid-column: 1/13;
        grid-row: 2/3;
      }
      .modal-info {
        grid-column: 1/13;
        grid-row: 3/4;
        display: flex;
      }
      .modal-info-whimage {
        grid-column: 1/13;
        grid-row: 2/3;
        display: flex;
      }
      .info-project, .detail-project {
        width: 50%;
      }
      .reverse {
        flex-direction: row-reverse;
      }
      .modal-info h3, .modal-info-whimage h3 {
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
      details: {type: Object},
      urlImage: {type: String},
      reverseDetails: {type: Boolean},
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
    this.urlImage = '';
    this.reverseDetails = false;
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? 'openModal' : ''}">
        <div class="${this.urlImage ? 'modal-content' : 'modal-content-whimage'}">
          <div class="modal-close" @click="${this.closeModal}">X</div>
          <div class="modal-title">
            <p>${this.title}</p>
          </div>
          ${this.urlImage ? this._getTplImage() : '' }
          ${this._getTplDetails()}
        </div>
    </div>
    `;
  }

  closeModal() {
    this.isOpen = false;
  }

  _getTplImage() {
    return html `
      <div class="modal-img">
        <img src="${this.urlImage}" alt="${this.title}">
      </div>
    `;
  }

  _getTplDetails() {
    return html `
      <div class="${this.urlImage ? 'modal-info' : 'modal-info-whimage'} ${this.reverseDetails ? 'reverse' : '' }">
        <div class="info-project"> 
          <h3>Información del proyecto</h3>
          <div class="line"></div>
          ${this._getDetailsProyect()}
        </div>
        <div class="detail-project"> 
          <h3>Detalles del proyecto</h3>
          <div class="line"></div>
        </div>
      </div>
    `;
  }

  _getDetailsProyect() {
    const dataDetails = Object.entries(this.details);
    return dataDetails.map(data => html `<p class="cat">${data[0]} : <span>${data[1]} </span></p>`);
  }

 }
 
customElements.define('modal-portafolio-wcll', ModalPortafolioWcll);
 