import { html, css } from "lit";
import { property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import BaseElement from "../base-element";

export class Dialog extends BaseElement {
  // static get styles() {
  //   return [
  //     css`
  //       /* :host[hidden="false"] {
  //         display: none;      
  //       }        */
  //       /* .dialog-overview {
  //         border: 1px solid red;
  //         background-color: white;
  //         width: 100px;
  //         height: 100px;
  //         position: absolute;
  //         top: 100px;
  //         left: 100px;
  //       }        */
  //     `,
  //   ];
  // }
  @query('.dialog-overview')
  dialogOverview!: HTMLElement;

  @property({ type: Boolean, reflect: true}) 
  show = false;

  @property({ type: String, reflect: true}) 
  width = "auto";

  

  constructor() {
    super();   
    // let shadowRoot = this.attachShadow({mode: 'open'});
    // shadowRoot.innerHTML = `<div class="dialog-overview" > 
    // ${this.test}  
    //                             ${this.show?  `<slot></slot>`: ""}                             
    //                         </div>`;
  } 

  connectedCallback() {
    super.connectedCallback();
    // const slot = this.shadowRoot?.querySelector('slot');
    // console.log("slot",slot);
    // console.log("nodes",slot?.assignedNodes({flatten: true}));

    this.addEventListener('my-close-dialog', (e) => {
      this.show=false;
      this.dispatchEvent(new CustomEvent("after-my-dialog-close"));
    });
  }

  render() {
    return html`        
       ${this.show?  html` <div class="dialog-overview" 
                              part="my-dialog"                                                          
                              style=${styleMap({  color: 'blue', fontFamily: 'Roboto' })}
                            >                            
                                <slot></slot>
                            </div>`: ""}  
     
    `;
  }
}

export class MyDialogHeader extends BaseElement {
  static get styles() {
    return [
      css`
       .close-button {
          cursor: pointer;
          color:red;
          font-size: 12px;          
        }       
      `,
    ];
  }

  constructor() {
    super();   
  }

  closeDialog(){   
    let event = new CustomEvent('my-close-dialog', { bubbles: true, composed: true });
    this.dispatchEvent(event);

  }
  render(){
    return html `<div class="header" part="my-dialog-header">
                    <slot></slot>
                    <span class="close-button" @click="${this.closeDialog}">X</span>
                  </div>`
  }
}

export class MyDialogBody extends BaseElement {
  // static get styles() {
  //   return [
  //     css`
  //       .my-dialog-body {
  //         background: yellow;
  //       }
  //     `,
  //   ];
  // }  
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<div part="my-dialog-body">
                              <slot></slot>                              
                            </div>`;
  }
}
export class MyDialogFooter extends BaseElement {
  // static get styles() {
  //   return [
  //     css`
  //       .my-dialog-body {
  //         background: yellow;
  //       }
  //     `,
  //   ];
  // }  
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<div part="my-dialog-footer">
                              <slot></slot>
                            </div>`;
  }
}

window.customElements.define("my-dialog-footer",MyDialogFooter);
window.customElements.define("my-dialog-body", MyDialogBody);
window.customElements.define("my-dialog-header", MyDialogHeader);
window.customElements.define("my-dialog", Dialog);
