import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

import "./components/button";
import "./components/form";
import "./components/input";
import "./components/pagination";
import "./components/theme/theme-provider";
import "./components/select";
import "./components/container";
import "./components/link";

export class AlgoComponents extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--algo-components-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  onSubmit(e: { preventDefault: () => void; detail: any; }) {
    e.preventDefault();
    console.log(e.detail);
  }

  render() {
    var data = [
      { id: 1, name: "Tom" },
      { id: 2, name: "Jerry" },
      { id: 3, name: "Donald" },
    ];
    return html`<theme-provider theme="black">
      <my-container>
          <my-link text="Home"></my-link>
          <my-link text="Features">Home</my-link>
          <my-form @on-submit="${this.onSubmit}">
            <my-input
              name="title"
              placeholder="Title"
              helpText="My Help"
            ></my-input>
            <my-select name="color" .data=${["yellow", "blue"]}></my-select>
            <my-button type="primary">Click Me!</my-button>
          </my-form>
      </my-container>
    </theme-provider>`;
  }
}
