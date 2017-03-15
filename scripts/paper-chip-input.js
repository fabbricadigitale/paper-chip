class PaperChipInput extends Polymer.Element {
  static get is() {
    return "paper-chip-input"
  }
  static get properties() {
    return {
      label: {
        type: String,
        value: () => "Tags"
      },
      tags: {
        type: Array,
        notify: true,
        value: () => [],
        observer: "_onTagsChanged"
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

  _onTagsChanged(tags) {
    if (!tags) {
      return
    }

    const uniqueTags = [...new Set(tags)]
    if (tags.length !== uniqueTags.length) {
      this.tags = uniqueTags
    }
  }

  _ensureTags() {
    if (!this.tags) {
      this.tags = []
    }
  }

  _popChip() {
    this._ensureTags()
    this.pop("tags")    
  }

  _pushChip() {
    let tagInput = this.shadowRoot.querySelector("#tagInput")
    if (tagInput.value) {
      const value = tagInput.value.trim()
      this._ensureTags()
      if (!this.tags.includes(value)) {
        this.push("tags", value)        
      }
      tagInput.value = ''
    }
  }

  _removeChip(evt) {
    const index = evt.currentTarget.index
    this._ensureTags()
    if (index in this.tags) {      
      this.splice("tags", index, 1)    
    }
  }

}

customElements.define(PaperChipInput.is, PaperChipInput)
