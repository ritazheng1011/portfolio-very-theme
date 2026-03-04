import { LitElement, html, css } from "lit";

export class PortfolioVeryTheme extends LitElement {
  static get tag() {
    return "portfolio-very-theme";
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get(PortfolioVeryTheme.tag)) {
  customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
}
