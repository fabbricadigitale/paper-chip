class PaperChipInputAutocomplete extends Polymer.Element {
  static get is() {
    return "paper-chip-input-autocomplete"
  }
  static get properties() {
    return {
      displayProperty: {
        type: String,
        value: () => { return "label" }
      },
      valueProperty: {
        type: String,
        value: () => { return "value" }
      },
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
    const item = {}
    item[this.displayProperty] = event.target.labelText
    item[this.valueProperty] = event.target.value

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
    const index = this._source.findIndex((item) => { return item[this.displayProperty] === selectedItem[this.displayProperty] })
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
      return item[this.displayProperty].toLowerCase().includes(value.toLowerCase())
    })
  }

  _startsWith(value) {
    return this._source.filter((item) => {
      return item[this.displayProperty].toLowerCase().startsWith(value.toLowerCase())
    })
  }

  _computeValue(item) {
    return item[this.valueProperty]
  }

  _computeLabel(item) {
    return item[this.displayProperty]
  }
}

customElements.define(PaperChipInputAutocomplete.is, PaperChipInputAutocomplete)
