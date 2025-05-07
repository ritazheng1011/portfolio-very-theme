/*
  Component: language-badge-list.js
*/
import { LitElement, html, css } from "lit";

export class LanguageList extends LitElement {
  static get tag() {
    return "language-list";
  }

  static get styles() {
    return css`
      .badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        flex-wrap: wrap;
      }
      .badge {
        background-color: #1420a143;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-weight: bold;
        border: 1px solid #ccc;
      }
    `;
  }

  render() {
    return html`
      <div class="badges">
        <div class="badge">Python</div>
        <div class="badge">Java</div>
        <div class="badge">SQL</div>
        <div class="badge">JavaScript</div>
        <div class="badge">HTML</div>
        <div class="badge">CSS</div>
        <div class="badge">Figma</div>
        <div class="badge">Miro</div>
      </div>
    `;
  }
}

customElements.define(LanguageList.tag, LanguageList);
