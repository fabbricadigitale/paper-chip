class PaperChip extends
  Polymer.mixinBehaviors(Polymer.IronControlState,
  Polymer.mixinBehaviors(Polymer.IronButtonState,
  Polymer.mixinBehaviors(Polymer.IronA11yKeysBehavior, Polymer.Element))) {

  static get is() {
    return "paper-chip"
  }
  /**
   * (Note) => The properties are replicated to works with different version of Polymer
   * When we use definitely the newer version we can cut config prop
   */
  static get properties() {
    return {

      value: {
        type: String,
        observer: "_valueChanged"
      },

      index: {
        type: Number,
        reflectToAttribute: true
      },

      /**
       * Whether or not the chip is removable. If `true`, a remove button will
       * be shown.
       *
       * @attribute removable
       * @type boolean
       * @default false
       */
      removable: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Whether or not the chip contains additional content. Single-line chips do not open.
       */
      singleLine: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_singleLineChanged"
      },

      /**
       * Whether or not the chip uses an animated transition between opened and
       * closed states
       *
       * @attribute animated
       * @type boolean
       * @default true
       */
      animated: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Whether or not the chip is in its opened state.
       *
       * @attribute opened
       * @type boolean
       * @default false
       */
      opened: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true,
        observer: "_openedChanged"
      },

      _elevation: {
        type: Number,
        computed: "_computeElevation(opened, focused, disabled, active, pressed)"

      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.addEventListener("tap", this._onTap)
    this.addEventListener("blur", this._onBlur)
    this._ensureAttribute("tabindex", 0)
    this._setDefaultValue()
  }



  disconnectedCallback() {
    super.disconnectedCallback()

    this.removeEventListener("tap", this._onTap)
    this.removeEventListener("blur", this._onBlur)
  }

  _computeElevation(opened, focused, pressed) {
    const elevationMax = 4
    const elevationMin = 1
    const noElevation = 0
    if (focused || pressed) {
      return elevationMin
    }
    if (opened) {
      return elevationMax
    }
    return noElevation
  }

  _onTap() {
    this.toggleOpened()
  }

  _onBlur() {
    this.opened = false
  }

  _remove(evt) {
    evt.stopPropagation();
    this.dispatchEvent(new CustomEvent("remove-chip", { cancelable: true }))
    //this.parentNode.removeChild(this)
  }

  toggleOpened() {
    if (!this.singleLine) {
      this.opened = !this.opened
    }
  }

  _singleLineChanged(singleLine) {
    if (singleLine && this.opened) {
      this.opened = false
    }
  }

  _openedChanged(opened) {
    if (opened && this.singleLine) {
      this.opened = false
      return
    }
    if (this.animated) {
      let width = ""
      let height = ""
      const content = this.$.content
      if (this.opened) {
        this.animated = false
        this.opened = true
        width = `${content.offsetWidth} px`
        height = `${content.offsetHeight} px`
        this.opened = false
        this._forceReflow()
        this.opened = true
        this.animated = true
      }
      content.style.width = width
      content.style.height = height
    }
  }

  _valueChanged(value) {
    if(value === undefined || value ==""){
      this._setDefaultValue()
    }
  }

  _forceReflow() {
    return this.offsetHeight
  }

  get behaviors() {
    return []
  }

  get keyBindings() {
    return {
      "delete": "_remove",
      "backspace": "_remove"
    }
  }

  _setDefaultValue() {
    this.value = Polymer.dom(this).querySelector("[slot='label']") ? Polymer.dom(this).querySelector("[slot='label']").textContent : undefined
  }

}

customElements.define(PaperChip.is, PaperChip)
