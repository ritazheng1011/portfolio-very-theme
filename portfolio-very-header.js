/**
 * Copyright 2025 ritazheng1011
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioVeryHeader extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-very-header";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-default-white);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }

        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          z-index: 1000;
          background-color: var(--ddd-theme-default-navy80);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-bar a {
          color: var(--ddd-theme-default-white);
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: background-color 0.2s ease-in-out;
        }

        .nav-bar a:hover {
          background-color: var(--ddd-theme-default-slateGray);
        }

        .wrapper {
          margin-top: -60px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="nav-bar">
          <a href="#1">About</a>
          <a href="#2">Resume</a>
          <a href="#3">Professional Experience</a>
          <a href="#4">Projects</a>
          <a href="#5">Contact</a>
        </div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(PortfolioVeryHeader.tag, PortfolioVeryHeader);
