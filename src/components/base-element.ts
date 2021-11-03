import { LitElement, css } from "lit";

import bootstrapStyles from "./styles/bootstrap.styles";
export default abstract class BaseElement extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    // this is the important part, this array includes our resetted styles and this components styles
    return [
      bootstrapStyles, 
      css`
      `
    ]; 
  }

  // createRenderRoot() {
  //   return this;
  // }

  fire(name: string, detail?: any) {
    console.log(`Firing ${name}`);
    fireEvent(this, name, detail);
  }
}

export function fireEvent(e: HTMLElement, name: string, detail?: any) {
  e.dispatchEvent(new CustomEvent(name, {
    composed: true,
    bubbles: true,
    detail
  }));
}
