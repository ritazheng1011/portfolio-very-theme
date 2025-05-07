/**
 * Copyright 2025 ritazheng1011
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioVeryScroll extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-scroll";
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-default-navy20);
          font-family: var(--ddd-font-navigation);
          overflow: hidden;
          border-left: 4px solid var(--ddd-theme-default-slateMaxLight);
        }

        .wrapper {
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-4);
          background-color: var(--ddd-theme-accent);
          border-radius: var(--ddd-radius-sm);
        }

        h3 {
          margin-top: var(--ddd-spacing-0);
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold);
        }

        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <h3>${this.title}</h3>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(PortfolioVeryScroll.tag, PortfolioVeryScroll);
