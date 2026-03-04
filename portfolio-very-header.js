import { LitElement, html, css } from "lit";

export class PortfolioVeryHeader extends LitElement {
  static get tag() {
    return "portfolio-very-header";
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999999;
      display: block;
    }

    nav {
      height: var(--header-height, 72px);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      padding: 0 1rem;

      background: linear-gradient(180deg, #0b1f3a, rgba(11, 31, 58, 0.92));
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
      backdrop-filter: blur(8px);
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 850;
      font-size: 0.98rem;
      padding: 0.5rem 0.95rem;
      border-radius: 999px;
      transition:
        transform 0.15s ease,
        background-color 0.15s ease,
        opacity 0.15s ease;
      opacity: 0.95;
      cursor: pointer;
    }

    a:hover {
      background: rgba(255, 255, 255, 0.14);
      transform: translateY(-1px);
      opacity: 1;
    }

    a:focus-visible {
      outline: 2px solid rgba(255, 255, 255, 0.75);
      outline-offset: 2px;
    }

    @media (max-width: 720px) {
      nav {
        height: auto;
        padding: 0.75rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      a {
        font-size: 0.95rem;
        padding: 0.45rem 0.8rem;
      }
    }
  `;

  _scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const headerH = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim() || "72",
      10,
    );

    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  _onNavClick(e) {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    e.preventDefault();
    this._scrollTo(href.slice(1));
  }

  render() {
    return html`
      <nav @click=${this._onNavClick} aria-label="Primary">
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    `;
  }
}

if (!customElements.get(PortfolioVeryHeader.tag)) {
  customElements.define(PortfolioVeryHeader.tag, PortfolioVeryHeader);
}
