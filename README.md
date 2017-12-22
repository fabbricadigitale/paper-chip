[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/fabbricadigitale/paper-chip) [![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT) [![Build Status](https://img.shields.io/travis/fabbricadigitale/paper-chip.svg?style=flat-square)]()

# \<paper-chip\>

Material design: [Chips](https://material.io/guidelines/components/chips.html#).

> A chip web component made with Polymer 2 following Material Design guidelines

This elements family may provide a icon or a photo, some line of text or a contact information with Material Design styling.

[![Browser Support Matrix](https://saucelabs.com/browser-matrix/paper-chip.svg)](https://saucelabs.com/u/paper-chip)

### Elements

* `<paper-chip>`
* `<paper-chip-input>`

### Table of contents

* [\<paper-chip\>](#paper-chip-usage)
  * [Minimal](#minimal)
  * [Single or multi line chips](#single-or-multi-line)
  * [Removable chips](#removable)
  * [Animatable chips](#animated-transition)
* [\<paper-chip-input\>](#paper-chip-input-usage)
  * [How to configure the presentation](#how-to-configure-its-presentation)
    * [Disable the input underline](#disable-the-input-underline)
    * [How to fix the input label at the top](#how-to-fix-the-input-label-at-the-top)
    * [Non floating label](#non-floating-label)
  * [How to customize the submit keys](#configure-your-favorite-submit-keys)
  * [Autocomplete](#autocomplete)
    * [Configure custom datasource properties](#configure-custom-datasource-properties)
    * [Customize the filtering logic of the autocomplete](#custom-filter-logic)
  * [Declarative insertion of chips](#how-to-insert-chips)

## \<paper-chip\> usage

### Minimal

A minimal chip.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip single-line>Minimal chip</paper-chip>
```

### Single or multi-line

It can show **single-line** or **multi-line** text.

You can **open a multi-line chip** tapping on it, showing some additional info.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip>
    <iron-icon slot="icon" class="icon" icon="avatars:avatar-1"></iron-icon>
    <div slot="label" class="label">John Foo</div>
    <div slot="caption" class="caption">jfoo@doh.com</div>
</paper-chip>
```

### Removable

Following snippet of code shows how to configure (via attributes) some basic behavior.

It may be **removable** or not.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip removable>
    <div slot="label" class="label">Removable Chip</div>
</paper-chip>
```

### Animated transition

Do you want to **animated** the chip when it is opening?

You can do it via attribute.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip removable animated>
    <div slot="icon" class="icon">P</div>
    <div slot="label" class="label">John Foo</div>
    <div slot="caption" class="caption">jfoo@doh.com</div>
</paper-chip>
```

## \<paper-chip-input\> usage

Use `<paper-chip-input>` when you desire an input field where the strings digited by the user are collected as `paper-chip`s.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input></paper-chip-input>
```

### How to configure its presentation

Configure `paper-chip-input` presentation using attribute.

#### Disable the input underline

If you do not want the input underline use `noline` attribute.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input noline></paper-chip-input>
```
#### How to fix the input label at the top

Use `always-float-label` attribute to fix the the label at the top.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input always-float-label></paper-chip-input>
```

#### Non floating label

Use `no-label-float` attribute to disable floating label. So the input label will be inside the input.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input no-label-float></paper-chip-input>
```

### Input field feature

Inputs can have different types, and be disabled.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="text input" staged-value="pre-filled"></paper-chip-input>
```

Inputs can have character counters.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="simple character counter" char-counter></paper-chip-input>
```

Or you can limit chip text's max length.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="input with at most 10 characters" char-counter maxlength="10"></paper-chip-input>
```

Inputs can validate automatically or on demand, and can have custom error messages.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="this input requires letters only" auto-validate pattern="[a-zA-Z]*" error-message="letters only!"></paper-chip-input>
```

You can configure your favorite allowed pattern.

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="this input will only let you type letters" auto-validate allowed-pattern="[a-zA-Z]"></paper-chip-input>
```

You can run validation manually

 <!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input id="inputForValidation" required label="this input is manually validated" pattern="[a-zA-Z]*" error-message="letters only!"></paper-chip-input>

<button onclick="validate()">Validate!</button>
<script>
function validate() {
    document.getElementById('inputForValidation').validate();
}
</script>
```

`paper-chip-input` can have custom prefix and suffix.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input no-label-float label="">
    <iron-icon icon="mail" slot="prefix"></iron-icon>
    <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
</paper-chip-input>
```

### Chip-added and chip-removed event

`paper-chip-input` fires custom events chip-added/chip-removed event when a chip is added or removed to `paper-chip-input`.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input id="custom-event"></paper-chip-input>
<span id="log"></span>
<script>
document.querySelector('#custom-event').addEventListener('chip-added', function (e) {
    document.querySelector("#log").textContent="Chip added!"
})
document.querySelector('#custom-event').addEventListener('chip-removed', function (e) {
    document.querySelector("#log").textContent="Chip removed!"
})
</script>
```

### Configure your favorite submit keys

Do you want to change the **keys** that automatically submit chips?

No worries, we support it!

Configure them with the `enter-keys` property adding the keys.

We support the [Polymer.IronA11yKeysBehavior](https://github.com/PolymerElements/iron-a11y-keys-behavior) format.

Following example should clarify the usage of this feature.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input enter-keys='["enter", "space"]'></paper-chip-input>
```

### Autocomplete

Do you need **autocomplete** ?

When you have a predefined and finite set of input values you can set the predefined values with `datasource` property.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input label="Weekdays" datasource='[{"value": "1", "label": "monday" },{"value": "2", "label": "tuesday"}, {"value": "3", "label": "wednesday"}, {"value": "4", "label": "thursday"}, {"value": "5", "label": "friday"}, {"value": "6", "label": "saturday"}, {"value": "7", "label": "sunday"}]'  placeholder="Add day"></paper-chip-input>
```

#### Configure custom datasource properties

The default properties for datasource are `label` and `value`, but you can configure it from outside by the properties `display-property` and `value-property`.

```html
<paper-chip-input display-property="val" value-property="key">
</paper-chip-input>
```

```json
[
  { "val": "apple", "key": "0" },
  { "val": "apricot", "key": "1" }
]
```

#### Custom filter logic

Autocomplete uses a **startWith** filter as default logic.

Do you need to implement a **custom filter logic**? You can do it!

Set `filter` property with your custom *function*. The following lines of code will show you how to do it.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input id="weekdays" label="Weekdays" datasource='[{"value": "1", "label": "monday" },{"value": "2", "label": "tuesday"}, {"value": "3", "label": "wednesday"}, {"value": "4", "label": "thursday"}, {"value": "5", "label": "friday"}, {"value": "6", "label": "saturday"}, {"value": "7", "label": "sunday"}]' placeholder="Add day"></paper-chip-input>
<script>
let weekdays = document.querySelector("#weekdays")
weekdays.filter = (data, value) => {
    return data.filter((item) => item[weekdays.displayProperty].toLowerCase().includes(value.toLowerCase()))
}
</script>
```

### How to insert chips

You can insert `<paper-chip>` elements inside the `<paper-chip-input>` declaratively - ie., putting the within the Light DOM.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-chip-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<paper-chip-input>
  <paper-chip value="light">Light</paper-chip>
  <paper-chip value="dom">DOm</paper-chip>
</paper-chip-input>
```

## Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-secondary-text-color` | The paper-chip label-color | `--secondary-text-color`
`--paper-chip-background-color` | The paper-chip background-color | `--paper-grey-200`
`--paper-chip-icon-background-color` | The paper-chip avatar background-color | `--paper-grey-500`
`--paper-chip-icon-text-color` | The paper-chip icon color | `--text-primary-color`
`--paper-chip-closed-label-max-width` | The paper-chip label max-width when is closed | 80px

## Testing

If you are using **polyserve** navigate to the `test/` directory of your element to run its tests.

You can view results in the browser console.

### WCT

The tests are run via [web-component-tester](https://github.com/polymer/web-component-tester).

To run them locally execute:

```bash
npm test
```

## Contributing

Thanks for your interest in this project!

We are really glad you are reading this. External contributions are very welcome by our team. We know that we need volunteer developers to help this project come (and mantain) to fruition.

There are many ways to contribute to this project. Get started reading the [contributing guide](CONTRIBUTING.md).

## License

MIT © fabbricadigitale


