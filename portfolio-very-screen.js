import { LitElement, html, css } from "lit";

export class PortfolioVeryScreen extends LitElement {
  static get tag() {
    return "portfolio-very-screen";
  }

  static styles = css`
    :host {
      display: block;
      padding: 0;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get(PortfolioVeryScreen.tag)) {
  customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);
}
