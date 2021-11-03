import { html, css } from "lit";
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import BaseElement from "../base-element";

export class Container extends BaseElement {
  // static styles = styles;

  constructor() {
    super();
  }

  render() {
    return html`
     <div class="container-fluid">
       <slot></slot>
     </div>
    `;
  }
}
window.customElements.define("my-container", Container);
