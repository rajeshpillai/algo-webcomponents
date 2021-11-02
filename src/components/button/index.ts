import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';

import BaseElement from "../base-element";

import styles from './button.styles';

export class MyButton extends BaseElement {
  static styles = styles;

   /** The button's type. */
   @property({ reflect: true }) type: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' =
   'default';

   /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;
   
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
      part="base"
      class=${classMap({
          button: true,
          'button--default': this.type === 'default',
          'button--primary': this.type === 'primary',
          'button--success': this.type === 'success',
          'button--neutral': this.type === 'neutral',
          'button--warning': this.type === 'warning',
          'button--danger': this.type === 'danger',
          'button--text': this.type === 'text',
          'button--standard': !this.outline,
        })}
        type="button"
        @click="${this.onClick}"
      >
        <slot>Submit</slot>
  </button>
    `;
  }
}
window.customElements.define("my-button", MyButton);
