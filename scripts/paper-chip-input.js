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
            console.log(this.tags)
            this.forceNotify()
        } else if (tagInput.value && event.code === 'Enter') {
            this.tags.push(tagInput.value.trim())
            tagInput.value = ''
            console.log(this.tags)
            this.forceNotify()
        }
    })
  }

  forceNotify() {
    let arr = this.tags
    this.tags = []
    this.tags = arr
  }
}

customElements.define(PaperChipInput.is, PaperChipInput)
