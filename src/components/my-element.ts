import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type Size = 'small' | 'medium' | 'large';

@customElement('my-element')
export class MyElement extends LitElement {
  /** Parsed fine: a local union alias. */
  @property() size: Size = 'medium';

  /** Warns: HTMLElement (lib.dom.d.ts) exceeds maxParseProperties. */
  @property({ attribute: false }) anchor: HTMLElement | null = null;

  /** Warns: CSSStyleSheet (lib.dom.d.ts) is recursive / too deep. */
  @property({ attribute: false }) sheet: CSSStyleSheet | null = null;

  /** Warns: LitElement (node_modules) exceeds maxParseProperties. */
  @property({ attribute: false }) host: LitElement | null = null;

  render() {
    return html`<slot></slot>`;
  }
}
