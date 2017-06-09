[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/fabbricadigitale/paper-chip)
 [![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# \<paper-chip\>

Material design: [Chips](https://material.io/guidelines/components/chips.html#).

> A chip web component made with Polymer 2 following Material Design guidelines

This elements family may provide a icon or a photo, some line of text or a contact information with Material Design styling.

### Elements

* `<paper-chip>`
* `<paper-chip-input>`
* `<paper-chip-input-autocomplete>`

## Usage

A basic paper-chip ...

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

Do you want to **animate** the chip when it is opening?

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

Do you need **autocomplete** ?

Use `<paper-chip-input-autocomplete>` when you have a predefined and finite set of input values.

```html
<paper-chip-input-autocomplete></paper-chip-input-autocomplete>
```

You can set the predefined values with `datasource` property.

```html
<paper-chip-input-autocomplete
  datasource='{{"value":"apple","key":0},{"value":"apricot","key":1}}'>
</paper-chip-input-autocomplete>
```

The default properties for datasource are `label` and `value`, but you can configure it from outside by the properties `display-property` and `value-property`.

```html
<paper-chip-input-autocomplete display-property="val" value-property="key">
</paper-chip-input-autocomplete>
```

```json
{ "val": "apple", "key": 0 },
{ "val": "apricot", "key": 1 }
```

## Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-secondary-text-color` | The paper-chip label-color | `--secondary-text-color`
`--paper-chip-background-color` | The paper-chip background-color | `--paper-grey-200`
`--paper-chip-icon-background-color` | The paper-chip avatar background-color | `--paper-grey-500`
`--paper-chip-icon-text-color` | The paper-chip icon color | `--text-primary-color`

## Testing

If you are using **polyserve** navigate to the `test/` directory of your element to run its tests. You can view results in browser console.

### WCT

The tests are run via [web-component-tester](https://github.com/polymer/web-component-tester).

To run them locally execute:

```bash
npm test
```

## License

MIT © fabbricadigitale


