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
      values: {
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
    const item = {
      label: event.target.labelText,
      value: event.target.value
    }
    //if (!this.values.includes(value)) {
      this.push("values", item)
    //}
    tagInput.value = ""
    this.hidden = true
    this.$.tagInput.focus()
  }

  _removeChip(evt) {
    evt.stopPropagation()
    this.hidden = true
    const index = evt.currentTarget.index
    if (index in this.values) {
      this.splice("values", index, 1)
      this._prefilterSource()
    }

  }

  _popChip() {
    this.hidden = true
    this.pop("values")
    this._prefilterSource()
  }

  _filterSource(selectedItem) {
    const index = this._source.findIndex((item) => { return item.label === selectedItem.label })
    if (index !== -1) {
      this.splice("_source", index, 1)
    }
  }

  _prefilterSource() {
    this._source = this.datasource.slice()

    this.values.forEach((item) => {
      this._filterSource(item)
    })
  }

  _includes(value) {
    return this._source.filter((item) => {
      return item.label.toLowerCase().includes(value.toLowerCase())
    })
  }

  _startsWith(value) {
    return this._source.filter((item) => {
      return item.label.toLowerCase().startsWith(value.toLowerCase())
    })
  }
}

customElements.define(PaperChipInputAutocomplete.is, PaperChipInputAutocomplete)
