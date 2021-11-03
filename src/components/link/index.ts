import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import BaseElement from "../base-element";


export class Link extends BaseElement {
  @property({ type: String }) text = "";

  constructor() {
    super();
  }
  render() {
    return html`
       <a class="nav-link" href="#">${this.text}</a>
    `;
  }
}
window.customElements.define("my-link", Link);
