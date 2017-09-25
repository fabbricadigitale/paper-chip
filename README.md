[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/fabbricadigitale/paper-chip) [![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT) [![Build Status](https://img.shields.io/travis/fabbricadigitale/paper-chip.svg?style=flat-square)]()

# \<paper-chip\>

Material design: [Chips](https://material.io/guidelines/components/chips.html#).

> A chip web component made with Polymer 2 following Material Design guidelines

This elements family may provide a icon or a photo, some line of text or a contact information with Material Design styling.

[![Browser Support Matrix](https://saucelabs.com/browser-matrix/paper-chip.svg)](https://saucelabs.com/u/paper-chip)

### Elements

* `<paper-chip>`
* `<paper-chip-input>`

### Paper-chip features

* Single or multi line
* Behaviour configuration via attribute
  * removable
  * openable
  * animated

### Paper-chip-input features

* UX configurable via attribute
  * floating label
  * input underline
* Support for Polymer.IronA11yKeysBehavior format
  * Submit keys customization
* Autocomplete
* Filter logic customizations

## Paper-chip usage

### Basic paper-chip

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
<paper-chip single-line>
    <div slot="label" class="label">Single-line Chip</div>
</paper-chip>
```

### Single or multi-line

It can show **single-line** or **multi-line** text. You can **open a multi-line chip** tapping on it.

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

### Basic animated transition

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

## Paper-chip-input usage

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

Configure `paper-chip-input` presentation using attribute.

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

 Use `always-float-label` attribute to always float the label

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


Use `no-label-float` attribute to disable floating label

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

### Input autocomplete

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

### Configure your custom datasource properties

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

### Use a custom filter logic

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


