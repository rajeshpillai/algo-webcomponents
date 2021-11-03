import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';

import BaseElement from "../base-element";

import styles from './button.styles';

export class MyButton extends BaseElement {
  // static styles = styles;

   /** The button's type. */
   @property({ reflect: true }) type: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' =
   'default';

   /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;
  
  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
   
  constructor() {
    super();
  }
  
  onClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
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
          button: false,
          'button--default': this.type === 'default',
          'btn btn-primary': this.type === 'primary',
          'button--success': this.type === 'success',
          'button--neutral': this.type === 'neutral',
          'button--warning': this.type === 'warning',
          'button--danger': this.type === 'danger',
          'button--text': this.type === 'text',
          'button--standard': !this.outline,
          'button--small': this.size === 'small',
          'button--medium': this.size === 'medium',
          'button--large': this.size === 'large',
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
