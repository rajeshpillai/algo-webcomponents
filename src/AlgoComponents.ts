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
import "./components/navbar/navbar";
import "./components/navbar/nav-mobile-toggle";
import "./components/dialog";

export class AlgoComponents extends LitElement {
  @property({ type: String }) title = 'My app';
  @property({ type: Boolean }) show = true;

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

    ::part(my-dialog-header){
          background-color: lightgray;
          font: verdana;
          font-size:15px;
          font-weight:800;
        }
        /* ::part(my-dialog-header)::after{
        
        } */

      ::part(my-dialog-body){
        font: verdana;
        font-size:13px;
        padding:  5px;
      }

    ::part(my-dialog){      
          border: 1px solid red;
          background-color: white;
          /* width: auto; */
          max-width: 500px;
          height: auto;
          min-height:100px;
          max-height:500px;
          position: absolute;
          top: 100px;
          left: 100px;        
    }

    ::part(my-dialog-footer){
      background-color: yellow;
      padding: 5px;
      font-size:12px;
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

  toggleDialog(e: { preventDefault: () => void }) {
    e.preventDefault();
    // this.shadowRoot?.querySelector("my-dialog")?.firstChild.style.display="none";
    console.log("dialog",this.shadowRoot?.querySelector("my-dialog"));
    this.show = !this.show;
    // document.querySelector(".dialog-overview").show();
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   // debugger;
  //   // document.querySelector("my-dialog")?.hide();
  //   // this.shadowRoot.querySelector(".dialog-overview").hide();
  // }

 

  render() {
    var data = [
      { id: 1, name: "Tom" },
      { id: 2, name: "Jerry" },
      { id: 3, name: "Donald" },
    ];
    return html`
    <theme-provider theme="black">
      <my-container>
        <my-nav-bar>
          <nav id="my-menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
          </nav>
          <!--<my-nav-mobile-toggle>Menu</my-nav-mobile-toggle> -->
        </my-nav-bar>
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
        <my-button type="success" @click=${this.toggleDialog}>Show Dialog</my-button>
        <my-dialog .show=${this.show} class="alert-closable" width="300px">
          <my-dialog-header>My Header....</my-dialog-header>
          <my-dialog-body>My dialog goes here111</my-dialog-body>
          <my-dialog-footer>My Dialog Footer</my-dialog-footer>
        </my-dialog>
      </my-container>
    </theme-provider>
   `;
  }
}
