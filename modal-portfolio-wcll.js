import {LitElement, html, css} from 'lit';
import {stylesModalPortfolio} from './modal-portfolio-wccll-styles';
import {ifDefined} from 'lit/directives/if-defined.js';

export class ModalPortfolioWcll extends LitElement {
  static get styles() {
    return [css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
        --animation-duration: .3s;
        --background-color-modal-content: #fff;
        --background-color-opacity-modal: rgba(0,0,0,0.7);
        --color-border-title: #d1d1d1;
        --color-separation-info-title: #0563BB;
        --color-text-visit-detail: #0563BB;
      }
    `, stylesModalPortfolio] 
  };

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
    this.dispatchEvent(new CustomEvent('modal-closed', {
      bubbles: true,
      composed: true,
      detail: this
    }));
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
 
customElements.define('modal-portfolio-wcll', ModalPortfolioWcll);
 