import { html, css } from "lit";
import BaseElement from "../base-element";

export class NavMobileToggle extends BaseElement {
  connectedCallback() {
    this.addEventListener("click", (e) => {
      console.log("NavBar Menu clicked:");
      this.dispatchEvent(new CustomEvent("toggle-menu", {
        composed: true,
        bubbles: true
      }));
    });
  }
}

window.customElements.define("my-nav-mobile-toggle", NavMobileToggle);

