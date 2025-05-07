/**
 * Copyright 2025 ritazheng1011
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-very-screen.js";
import "./portfolio-very-header.js";
import "@haxtheweb/scroll-button/scroll-button.js";

export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-theme.ar.json", import.meta.url)
          .href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          flex-wrap: wrap;
        }
        h3 span {
          font-size: var(
            --portfolio-very-theme-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        scroll-button {
          position: fixed;
          right: var(--ddd-spacing-5);
          bottom: var(--ddd-spacing-5);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
