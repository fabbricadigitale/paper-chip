class PaperChip extends Polymer.Element {
  static get is() {
    return "paper-chip"
  }
  static get config() {
    return {
      properties: {

      }
    }
  }
}

customElements.define(PaperChip.is, PaperChip)
