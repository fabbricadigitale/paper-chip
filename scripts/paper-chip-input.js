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

  connectedCallback() {
    super.connectedCallback()

    let tagInput = this.shadowRoot.querySelector("#tagInput")
    /*tagInput.addEventListener('input', (event) => {
        var value = tagInput.value
        if (value.slice(-1) === ' ') {
            console.log("value ", value)
            tagInput.value = ''
        }
    })*/
    tagInput.addEventListener('keydown',  (event) => {
       if (tagInput.value === '' && event.code === 'Backspace') {
            this.tags.pop()
            this.forceNotify()
        } else if (tagInput.value && event.code === 'Enter') {
            this.tags.push(tagInput.value.trim())
            tagInput.value = ''
            this.forceNotify()
        }
    })
  }

  forceNotify() {
    let arr = this.tags
    this.tags = []
    this.tags = arr
  }

  _removeChip(evt) {
    const index = evt.currentTarget.index
    if(index in this.tags){
      this.tags.splice(index, 1)
      this.forceNotify()
    }
  }
}

customElements.define(PaperChipInput.is, PaperChipInput)
