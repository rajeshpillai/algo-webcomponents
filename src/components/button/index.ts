import { html, css } from "lit";
import BaseElement from "../base-element";

export class MyButton extends BaseElement {
  constructor() {
    super();
  }
  
  onClick() {
    this.dispatchEvent(
      new CustomEvent("my-submit", { bubbles: true, composed: true })
    );
  }
  render() {
    console.log("Rendering: Button");

    return html`
      <button
        type="button"
        @click="${this.onClick}"
      >
        <slot>Submit</slot>
  </button>
    `;
  }
}
window.customElements.define("my-button", MyButton);
