import { css } from "lit";

export const stylesModalPortfolio = css `
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
    visibility: hidden;
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
    visibility: visible;
    transition: opacity var(--animation-duration) ease-in;
  }
  .closeModal {
    opacity: 0;
    transition: opacity var(--animation-duration) ease-in;
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
