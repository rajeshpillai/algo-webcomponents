import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import BaseElement from "../base-element";

export class MyForm extends BaseElement {
  // @property({ attribute: false }) form;
  @property({ type: HTMLElement }) form;

  constructor() {
    super();
    this.form = document.querySelector("form");
  }

  // static get properties() {
  //   return {
  //     form: { type: HTMLElement },
  //   };
  // }

  onSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    alert("onsubmit from my-form");
    let data = {};
    // this.renderRoot
    //   .querySelector("form")
    //   .querySelector("slot")
    //   .assignedElements({ flatten: true })
    //   .map((ele) => {
    //     if (
    //       ele.renderRoot.querySelector(".form-control") &&
    //       ele.renderRoot.querySelector(".form-control").name
    //     ) {
    //       data[
    //         ele.renderRoot.querySelector(".form-control").name
    //       ] = ele.renderRoot.querySelector(".form-control").value;
    //     }
    //   });

    this.dispatchEvent(
      new CustomEvent("on-submit", {
        bubbles: true,
        composed: true,
        detail: data,
      })
    );
  }

  render() {
    return html`<form>
      <slot @my-submit="${this.onSubmit}"></slot>
    </form>`;
  }
}
window.customElements.define("my-form", MyForm);
