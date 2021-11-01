import { html, css } from "lit";
import { property, query } from 'lit/decorators.js';

import BaseElement from "../base-element";

export class MyForm extends BaseElement {
  // @property({ attribute: false }) form;
  // @property({ type: HTMLElement }) form;

  // @property({ attribute: false }) form;
  // @property({ type: HTMLElement }) form;
  @query('.form')
  form!: HTMLElement;

  constructor() {
    super();
    // this.form = document.querySelector("form");
  }

  // static get properties() {
  //   return {
  //     form: { type: HTMLElement },
  //   };
  // }

  onSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    
    let data = {} as any;

    const childNodes = this.form.querySelector("slot")?.assignedNodes({flatten: true});
    const childElems =  Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);

    console.log("childElems:", childElems);
    childElems.forEach(e => {
      let name = e.shadowRoot?.querySelector(".form-control")?.getAttribute("name") || undefined;
      if (name) {
        console.log("val: ", e.shadowRoot.querySelector(".form-control").value);
        data[name] = e.shadowRoot.querySelector(".form-control").value;   
      }
    });

    console.log("form: ", this.form.querySelector("slot")?.assignedElements());

    alert("onsubmit from my-form: " + JSON.stringify(data));

    this.dispatchEvent(
      new CustomEvent("on-submit", {
        bubbles: true,
        composed: true,
        detail: data,
      })
    );
  }

  render() {
    return html`<form class="form">
      <slot @my-submit="${this.onSubmit}"></slot>
    </form>`;
  }
}
window.customElements.define("my-form", MyForm);
