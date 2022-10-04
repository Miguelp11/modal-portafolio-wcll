import { LitElement, html, css } from 'lit';
import '../modal-portfolio-wcll';
import { INFO_DETAILS_MODAL, URL_IMAGE } from './resources/mocks';

class AppDemo extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      button {
        background-color: #004481;
        border-radius: 5px;
        color: #fff;
        padding: 10px 15px;
        cursor: pointer;
        margin: 5px 10px;
      }
      .modal-animation {
        --animation-duration: 3s;
      }
      .modal-styles {
        --background-color-modal-content: #989898;
        --background-color-opacity-modal: rgba(155,55,250,0.7);
        --color-border-title: #de7e7e;
        --color-separation-info-title: #13ab50;
        --color-text-visit-detail: #b5581e;
        --color-text-modal: #d1d3e7;
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
      <button @click="${this.openModalDefault}">Modal default</button>
      <button @click="${this.openModalTwoSections}">Modal dos secciones</button>
      <button @click="${this.openModalImage}">Modal con imagen</button>
      <button @click="${this.openModalImageAdjust}">Modal imagen ajustada</button>
      <button @click="${this.openModalReverse}">Modal dos secciones inversas</button>
      <button @click="${this.openModalAnimation}">Modal animacion lenta</button>
      <button @click="${this.openModalStyles}">Modal estilos personalizados</button>
      ${this._renderTplModal}
    `;
  }

  get _renderTplModal() {
    return html `
      <modal-portfolio-wcll class="modal-default" titleDetail="Descripción del proyecto">
        <div>
          <p>DESCRIPCIÓN Pariatur exercitation aute labore excepteur cillum ipsum magna duis duis cillum ex velit adipisicing. Amet veniam aliqua ipsum officia velit reprehenderit fugiat. Ea nisi magna est pariatur ad. </p>
          <strong>•</strong> <span>Creado con <strong>HTML</strong> y muchas cosas.</span>
          <br>
          <strong>•</strong> <span>Mas descripción a tu gusto.</span>
        </div>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-two-sections"
        title="Mi calculadora"
        titleInfo="Detalles" 
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-image"
        title="Mi calculadora"
        titleInfo="Detalles" 
        urlImage="${URL_IMAGE}"
        size="original"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-image-adjust"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-reverse"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}"
        reverseDetails>
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-animation"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        timeAnimation="3200"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}"
        reverseDetails>
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-styles"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
    `;
  }

  openModalDefault() {
    const modal = this.shadowRoot.querySelector('.modal-default');
    modal.openModal();
  }
  openModalTwoSections() {
    const modal = this.shadowRoot.querySelector('.modal-two-sections');
    modal.openModal();
  }
  openModalImage() {
    const modal = this.shadowRoot.querySelector('.modal-image');
    modal.openModal();
  }
  openModalImageAdjust() {
    const modal = this.shadowRoot.querySelector('.modal-image-adjust');
    modal.openModal();
  }
  openModalReverse() {
    const modal = this.shadowRoot.querySelector('.modal-reverse');
    modal.openModal();
  }
  openModalAnimation() {
    const modal = this.shadowRoot.querySelector('.modal-animation');
    modal.openModal();
  }
  openModalStyles() {
    const modal = this.shadowRoot.querySelector('.modal-styles');
    modal.openModal();
  }
}

customElements.define('app-demo', AppDemo);