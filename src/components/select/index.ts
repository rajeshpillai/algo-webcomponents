import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import BaseElement from "../base-element";

export class MySelect extends BaseElement {
  @property({ type: String }) name = '';
  @property({ type: String }) defaultValue = '';
  @property({ type: Array }) data = [];


  constructor() {
    super();
  }

  // static get properties() {
  //   return {
  //     name: { type: String },
  //     defaultValue: { type: String },
  //     data: { type: Array },
  //   };
  // }

  render() {
    return html`<select name="${this.name}" class="form-control">
      ${this.data.map((d) => {
        return html`<option .value=${d}>${d}</option>`;
      })}
    </select>`;
  }
}
window.customElements.define("my-select", MySelect);
