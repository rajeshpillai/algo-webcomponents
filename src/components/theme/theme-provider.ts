import { html, css } from "lit";
import { property } from 'lit/decorators.js';

import BaseElement from "../base-element";

export class ThemeProvider extends BaseElement {
  @property({ type: String }) theme = "";


  // static get styles() {
  //   const { cssRules } = document.styleSheets[1];

  //   const globalStyle = css([
  //     Object.values(cssRules)
  //       .map((rule) => rule.cssText)
  //       .join("\n"),
  //   ]);
  //   return [globalStyle, css``];
  // }

  constructor() {
    super();
  }

  render() {
    return html`<div class="${this.theme}"><slot></slot></div>`;
  }
}

window.customElements.define("theme-provider", ThemeProvider);
