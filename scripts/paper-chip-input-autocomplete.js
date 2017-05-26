class PaperChipInputAutocomplete extends Polymer.Element {
  static get is() {
    return "paper-chip-input-autocomplete"
  }
  static get properties() {
    return {
      hidden: {
        type: Boolean,
        value: true
      },
      label: {
        type: String,
        value: () => "Tags"
      },
      tags: {
        type: Array,
        notify: true,
        value: () => []
      },
      placeholder: {
        type: String,
        value: undefined
      },
      datasource: {
        type: Array,
        value: () => []
      },
      _source: {
        type: Array,
        value: () => []
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const tagInput = this.shadowRoot.querySelector("#tagInput")
    tagInput.addEventListener("keyup", () => {
      if (tagInput.value !== "") {
        this._filter()
      } else {
         this.hidden = true
      }
    })
    tagInput.addEventListener("keydown", (event) => {
      if (event.code === "Escape" && !this.hidden) {
        this.hidden = true
      } else if (tagInput.value === "" && event.code === "Backspace") {
        this._popChip()
      }
    })
  }

  _filter() {
    const tagInput = this.shadowRoot.querySelector("#tagInput")
    if (tagInput.value) {
      this._prefilterSource()
      this._source = this._startsWith(tagInput.value.toLowerCase())
      this.hidden = !this._source.length
    } else {
      this.hidden = true
    }
  }

  _select(event) {
    const tagInput = this.shadowRoot.querySelector("#tagInput")
    const value = event.target.labelText
    if (!this.tags.includes(value)) {
      this.push("tags", value)
    }
    tagInput.value = ""
    this.hidden = true
    this.$.tagInput.focus()
  }

  _removeChip(evt) {
    this.hidden = true
    const index = evt.currentTarget.index
    if (index in this.tags) {
      this.splice("tags", index, 1)
      this._prefilterSource()
    }
  }

  _popChip() {
    this.hidden = true
    this.pop("tags")
    this._prefilterSource()
  }

  _filterSource(value) {
    const index = this._source.findIndex((item) => { return item.name === value })
    if (index !== -1) {
      this.splice("_source", index, 1)
    }
  }

  _prefilterSource() {
    this._source = this.datasource.slice()

    this.tags.forEach((item) => {
      this._filterSource(item)
    })
  }

  _includes(value) {
    return this._source.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
  }

  _startsWith(value) {
    return this._source.filter((item) => {
      return item.name.toLowerCase().startsWith(value.toLowerCase())
    })
  }
}

customElements.define(PaperChipInputAutocomplete.is, PaperChipInputAutocomplete)
