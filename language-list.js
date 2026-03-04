import { LitElement, html, css } from "lit";

export class LanguageList extends LitElement {
  static get tag() {
    return "language-list";
  }

  static styles = css`
    :host {
      display: block;
    }
    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .badge {
      background: rgba(20, 32, 161, 0.1);
      border: 1px solid rgba(20, 32, 161, 0.18);
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      font-weight: 850;
      font-size: 0.92rem;
      color: rgba(0, 0, 0, 0.75);
    }
  `;

  render() {
    return html`
      <div class="badges" aria-label="Skills list">
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

if (!customElements.get(LanguageList.tag)) {
  customElements.define(LanguageList.tag, LanguageList);
}
