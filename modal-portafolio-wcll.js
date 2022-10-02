import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';

export class ModalPortafolioWcll extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
        --animation-duration: .3s;
        --background-color-modal-content: #fff;
        --background-color-opacity-modal: rgba(0,0,0,0.7);
        --color-border-title: #d1d1d1;
        --color-separation-info-title: #0563BB;
        --color-text-visit-detail: #0563BB;
      }
      * {
        box-sizing: border-box;
      }
      img {
        margin-top: 5px;
        width: 100%;
        height: 100%;
      }
      .image-contain {
        object-fit: contain;
      }
      .image-cover {
        object-fit: cover;
      }
      .image-fill {
        object-fit: fill;
      }
      .modal {
        width: 100%;
        height: 100%;
        background-color: var(--background-color-opacity-modal);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        font-size: 12px;
        transition: opacity var(--animation-duration) ease-in;
      }
      .modal-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto repeat(2, 1fr);
        height: auto;
        width: 90vw;
        background-color: var(--background-color-modal-content);
        /* overflow: scroll; */
        border-radius: 5px;
        padding: 10px;
      }
      .modal-content-whimage {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto 1fr;
        height: auto;
        width: 90vw;
        background-color: var(--background-color-modal-content);
        border-radius: 5px;
        padding: 10px;
      }
      .modal-close {
        grid-column: 12/13;
        text-align: center;
        border-bottom: 1px solid var(--color-border-title);
        padding-top: 16px;
        cursor: pointer;
      }
      .modal-title {
        grid-column: 1/12;
        grid-row: 1/2;
        text-align: center;
        border-bottom: 1px solid var(--color-border-title);
        font-weight: bold;
        text-transform: uppercase;
      }
      .modal-title h2 {
        font-size: 16px;
      }
      .openModal {
        opacity: 1;
      }
      .modal-img {
        grid-column: 1/13;
        grid-row: 2/3;
        max-width: 1024px;
        max-height: 335px;
      }
      .modal-info {
        grid-column: 1/13;
        grid-row: 3/4;
        display: flex;
        flex-direction: column;
      }
      .modal-info-whimage {
        grid-column: 1/13;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
      }
      .info-project, .detail-project, .detail-project-only {
        height: 100%;
      }
      .reverse {
        flex-direction: column-reverse;
      }
      .modal-info h3, .modal-info-whimage h3 {
        margin: 10px;
        font-size: 14px;
        text-align: center;
      }
      .line {
        background-color: var(--color-separation-info-title);
        width: 100px;
        height: 3px;
        margin: 10px auto;
      }
      .cat {
        margin: 5px 10px;
        font-weight: bold;
      }
      .cat span {
        font-weight: normal;
      }
      .cat span a {
        color: var(--color-text-visit-detail);
        text-decoration: none;
        font-weight: bold;
      }
      @media screen and (min-width: 480px) {
        .modal {
          font-size: 14px;
        }
        .modal-title h2 {
          font-size: 18px;
        }
        .modal-info h3, .modal-info-whimage h3 {
          font-size: 16px;
        }
      }
      @media screen and (min-width: 768px) {
        .modal {
          font-size: 16px;
        }
        .modal-title h2 {
          font-size: 20px;
        }
        .modal-info h3, .modal-info-whimage h3 {
          margin: 15px;
          font-size: 18px;
        }
        .modal-content {
          max-width: 1024px;
          max-height: 720px;
        }
        .modal-content-whimage {
          max-width: 1024px;
          max-height: 720px;
        }
        .modal-info {
          flex-direction: row;
        }
        .modal-info-whimage {
          flex-direction: row;
        }
        .info-project, .detail-project {
          width: 50%;
        }
        .detail-project-only {
          width: 100%;
        }
        .reverse {
          flex-direction: row-reverse;
        }
      }
    `;
  }

  static get properties() {
    return {
      title: {type: String},
      titleDetail: {type: String},
      titleInfo: {type: String},
      isOpen: {type: Boolean},
      details: {type: Object},
      urlImage: {type: String},
      reverseDetails: {type: Boolean},
      size: {type: String, reflect: true}
    };
  }

  constructor() {
    super();
    this.title = 'Nombre de tu proyecto';
    this.isOpen = false;
    this.details = {
      'Nombre': 'Mi primer proyecto',
      'Url': 'www.url.com',
      'Link': 'https://miguelp11.github.io/TallerPracticoJS/'
    };
    this.urlImage = '';
    this.reverseDetails = false;
    this.size = 'complete';
    this.titleDetail = 'Detalles del proyecto';
    this.titleInfo = '';
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? 'openModal' : ''}">
        <div class="${this.urlImage ? 'modal-content' : 'modal-content-whimage'}">
          <div class="modal-close" @click="${this.closeModal}">X</div>
          <div class="modal-title">
            <h2>${this.title}</h2>
          </div>
          ${this.urlImage ? this.getTplImage : '' }
          ${this.getTplModalDetails}
        </div>
    </div>
    `;
  }

  closeModal() {
    this.isOpen = false;
  }

  get getTplImage() {
    return html `
      <div class="modal-img">
        <img src="${this.urlImage}" alt="${this.title}" class="${ifDefined(this._selectionImageSize()) }">
      </div>
    `;
  }

  get getTplModalDetails() {
    return html `
      <div class="${this.urlImage ? 'modal-info' : 'modal-info-whimage'} ${this.reverseDetails ? 'reverse' : ''}">
        ${this.titleInfo ? this._getBothInfoProyect() : this._getOnlyDetailsProyect()}  
      </div>
    `;
  }

  _getBothInfoProyect() {
    return html `
        <div class="info-project"> 
          <h3>${this.titleInfo}</h3>
          <div class="line"></div>
          ${this._getDetailsProyect()}
        </div>
        <div class="detail-project">
          <h3>${this.titleDetail}</h3>
          <div class="line"></div>
          <slot></slot>
        </div>
    `;
  }

  _getOnlyDetailsProyect() {
    return html `
      <div class="detail-project-only">
        <h3>${this.titleDetail}</h3>
        <div class="line"></div>
        <slot></slot>
      </div>
    `;
  }

  _getDetailsProyect() {
    const dataDetails = Object.entries(this.details);
    return dataDetails.map(data => {
      return data[0] === 'Link' 
        ? html`<p class="cat">${data[0]} : <span><a href="${data[1]}" target="_blank">Visitar</a></span></p>`
        : html`<p class="cat">${data[0]} : <span>${data[1]} </span></p>`
    });
  }

  _selectionImageSize() {
    switch (this.size) {
      case 'original':
        return 'image-contain';
      case 'complete':
        return 'image-cover';
      case 'compress': 
        return 'image-fill';
    }
  }

 }
 
customElements.define('modal-portafolio-wcll', ModalPortafolioWcll);
 