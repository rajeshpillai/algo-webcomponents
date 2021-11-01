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
    return html`<input
      type="button"
      @click="${this.onClick}"
      value="Submit"
    />`;
  }
}
window.customElements.define("my-button", MyButton);