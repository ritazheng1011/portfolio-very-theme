/*
  Component: social-link-bar.js
*/
import { LitElement, html, css } from "lit";

export class SocialLinkBar extends LitElement {
  static get tag() {
    return "social-link-bar";
  }

  static get styles() {
    return css`
      .bar {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        margin-top: var(--ddd-spacing-4);
      }
      a {
        color: var(--ddd-theme-primary, #1a73e8);
        text-decoration: none;
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        transition: opacity 0.2s;
      }
      a:hover {
        color: var(--ddd-theme-accent, #005fa3);
        opacity: 0.7;
      }
    `;
  }

  render() {
    return html`
      <div class="bar">
        <a href="https://github.com/ritazheng1011" target="_blank">GitHub</a>
        <a
          href="https://www.linkedin.com/in/rita-zheng-b76b72226/"
          target="_blank"
          >LinkedIn</a
        >
      </div>
    `;
  }
}

customElements.define(SocialLinkBar.tag, SocialLinkBar);
