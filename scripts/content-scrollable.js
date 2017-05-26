class ContentScrollable extends
  Polymer.mixinBehaviors(Polymer.IronScrollTargetBehavior, Polymer.Element) {

  static get is() {
    return "content-scrollable"
  }

  static get properties() {
    return {
      xScrollTop: {
        type: Number,
        readOnly: true,
        value: 0
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._scrollHandler();
  }

  _scrollHandler() {
    this._setXScrollTop(this._scrollTop);
  }
}

customElements.define(ContentScrollable.is, ContentScrollable)

