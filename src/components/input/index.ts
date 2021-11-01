import { html, css } from "lit";
import { property } from 'lit/decorators.js';
import BaseElement from "../base-element";

export class MyInput extends BaseElement {
  @property({ type: String }) name = "";
  @property({ type: String }) defaultValue = "";
  @property({ type: String }) helpText = "";
  @property({ type: String }) placeholder = "title here";

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host input {
        display: block;
        color: var(--my-element-text-color, black);
        background: var("--my-element-background-color", white);
        font-family: var(--my-element-font-family, Roboto);
      }
      :host([hidden]) {
        display: none;
      }
    `;
  }

  render() {
    console.log("Rendering: MyInput");
    return html`<input
        class="form-control"
        type="text"
        name="${this.name}"
        value=${this.defaultValue}
        placeholder=${this.placeholder}
      /><span>${this.helpText}</span>`;
  }
}
window.customElements.define("my-input", MyInput);
