class PaperChipInput extends Polymer.Element {
  static get is() {
    return "paper-chip-input"
  }
  static get properties() {
    return {
      tags: {
        type: Array,
        notify: true,
        value: () => []
      }
    }
  }
  static get config() {
    return {
      properties: {
        tags: {
          type: Array,
          notify: true,
          value: () => []
        }
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    let tagInput = this.shadowRoot.querySelector("#tagInput")
    tagInput.addEventListener('keydown', (event) => {
      if (tagInput.value === '' && event.code === 'Backspace') {
        this._popChip()
      } else if (tagInput.value && event.code === 'Enter') {
        this._pushChip()
      }
    })
  }

  _popChip() {
    this.tags.pop()
    this.forceNotify()
  }

  _pushChip() {
    let tagInput = this.shadowRoot.querySelector("#tagInput")
    if (tagInput.value) {
      this.tags.push(tagInput.value.trim())
      tagInput.value = ''
      this.forceNotify()
    }
  }

  forceNotify() {
    let arr = this.tags
    this.tags = []
    this.tags = arr
    this._notifyOut()
  }

  _removeChip(evt) {
    const index = evt.currentTarget.index
    if (index in this.tags) {
      this.tags.splice(index, 1)
      this.forceNotify()
    }
  }

  _notifyOut() {
    this.dispatchEvent(new CustomEvent("submit-intent-chips", { bubbles: true, detail: this.tags }));
  }

}

customElements.define(PaperChipInput.is, PaperChipInput)
