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
      values: {
        type: Array,
        notify: true,
        value: () => [],
        observer: "_onValuesChanged"
      },
      placeholder: {
        type: String,
        value: undefined
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const tagInput = this.shadowRoot.querySelector("#tagInput")
    tagInput.addEventListener("keydown", (event) => {
      if (tagInput.value === "" && event.code === "Backspace") {
        this._popChip()
      } else if (tagInput.value && event.code === "Enter") {
        this._pushChip()
      }
    })
  }

  _onValuesChanged(values) {
    if (!values) {
      return
    }

    this._ensurePlaceholder()

    const uniqueValues = [...new Set(values)]
    if (values.length !== uniqueValues.length) {
      this.values = uniqueValues
    }
  }

  _ensureValues() {
    if (!this.values) {
      this.values = []
    }
  }

  _ensurePlaceholder() {
    if (this.values.length > 0) {
      this._removePlaceholder()
    } else {
      this._addPlaceholder()
    }
  }

  _popChip() {
    this._ensureValues()
    this.pop("values")
    this._ensurePlaceholder()
  }

  _pushChip() {
    const tagInput = this.shadowRoot.querySelector("#tagInput")
    if (tagInput.value) {
      const value = tagInput.value.trim()
      this._ensureValues()
      if (!this.values.includes(value)) {
        this.push("values", value)
        this._ensurePlaceholder()
      }
      tagInput.value = ""
    }
  }

  _removeChip(evt) {
    const index = evt.currentTarget.index
    this._ensureValues()
    if (index in this.values) {
      this.splice("values", index, 1)
      this._ensurePlaceholder()
    }
  }

  _removePlaceholder() {
    this.$.tagInput.removeAttribute("placeholder")
  }

  _addPlaceholder() {
    if (this.placeholder) this.$.tagInput.setAttribute("placeholder", this.placeholder)
  }

}

customElements.define(PaperChipInput.is, PaperChipInput)
