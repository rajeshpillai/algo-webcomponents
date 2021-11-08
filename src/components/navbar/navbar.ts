import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import BaseElement from "../base-element";


export class NavBar extends BaseElement {
  
  @property({ type: String }) initialMarkup = "";
  

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.initialMarkup = this.innerHTML;

    this.addEventListener("toggle-menu", (e) => {
      this.classList.toggle("open");
    }, true)
  }

  render() {
    console.log("markup: ", this.initialMarkup);
    // this.innerHTML = this.initialMarkup;
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define("my-nav-bar", NavBar);

