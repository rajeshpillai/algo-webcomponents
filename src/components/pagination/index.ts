import { html, css } from "lit";
import { property } from 'lit/decorators.js';


import BaseElement from "../base-element";

export class Pagination extends BaseElement {
  @property({ type: Number }) pageSize;
  @property({ type: Number }) totalrecords;
  @property({ type: Number }) noOfPages;


  // static get properties() {
  //   return {
  //     pageSize: { type: Number },
  //     totalrecords: { type: Number },
  //     noOfPages: { type: Number },
  //   };
  // }

  constructor() {
    super();
    this.totalrecords = 0;
    this.pageSize = 0;
    this.noOfPages = 0;
  }

  firstUpdated() {
    this.noOfPages = Math.ceil(this.totalrecords / this.pageSize);
  }
  render() {
    return html`<span
      >Pagination comp ${this.pageSize} - ${this.noOfPages}</span
    >`;
  }
}

window.customElements.define("my-pagination", Pagination);
