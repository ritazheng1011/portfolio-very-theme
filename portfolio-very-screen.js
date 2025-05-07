/**
 * Copyright 2025 ritazheng1011
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class PortfolioVeryScreen extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-very-screen";
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
          height: 100vh;
          padding: 2rem 1rem;
          box-sizing: border-box;
          scroll-margin-top: 120px;
        }

        h2 {
          margin-top: 0;
          font-size: var(--ddd-font-size-xl);
          font-weight: bold;
          color: #0d47a1;
          margin-bottom: 1rem;
        }

        .content {
          margin-top: 2rem;
        }

        :host(.about) {
          background-color: #e3f2fd; /* Lightest blue */
          color: #0d47a1;
        }

        :host(.resume) {
          background-color: #bbdefb; /* Lighter blue */
          color: #0d47a1;
        }

        :host(.experience) {
          background-color: #90caf9; /* Light blue */
          color: #0d47a1;
        }

        :host(.projects) {
          background-color: #64b5f6; /* Medium blue */
          color: #fff;
        }

        :host(.contact) {
          background-color: #1976d2; /* Darker blue */
          color: #fff;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <h2>${this.title}</h2>
        <slot name="banner"></slot>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);
