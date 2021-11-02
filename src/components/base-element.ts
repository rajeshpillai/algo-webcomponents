import { LitElement } from "lit";
export default abstract class BaseElement extends LitElement {
  constructor() {
    super();
  }

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
