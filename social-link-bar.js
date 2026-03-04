import { LitElement, html, css } from "lit";

export class SocialLinkBar extends LitElement {
  static get tag() {
    return "social-link-bar";
  }

  static styles = css`
    .bar {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: #1a73e8;
    }

    a:hover {
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <div class="bar">
        <a href="https://github.com/ritazheng1011" target="_blank">GitHub</a>

        <a href="https://linkedin.com/in/ritazheng1011" target="_blank">
          LinkedIn
        </a>
      </div>
    `;
  }
}

customElements.define(SocialLinkBar.tag, SocialLinkBar);
