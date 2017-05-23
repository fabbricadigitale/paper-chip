`paper-chip`
===========

Material design: [Chips](https://material.io/guidelines/components/chips.html#).

> Polymer 2.x `<paper-chip>` may contain a icon or a photo, some line of text or a contact information with Material Design styling.

## Usage

Basic paper-chip
```html
<paper-chip single-line>
    <div slot="label" class="label">Single-line Chip</div>
</paper-chip>
```

It can show **single-line** or **multi-line** text. You can open multi-line chip tapping on it.
```html
<paper-chip>
    <iron-icon slot="icon" class="icon" icon="avatars:avatar-1"></iron-icon>
    <div slot="label" class="label">John Foo</div>
    <div slot="caption" class="caption">jfoo@doh.com</div>
</paper-chip>
```

You can configure some basic behavior. It may be removable or not.

```html
<paper-chip removable>
    <div slot="label" class="label">Removable Chip</div>
</paper-chip>
```

You can choose to set animation in openable chip.

```html
<paper-chip removable animated>
    <div slot="icon" class="icon">P</div>
    <div slot="label" class="label">John Foo</div>
    <div slot="caption" class="caption">jfoo@doh.com</div>
</paper-chip>
```

You can use paper-chip-input to collect a set of tags

```html
    <paper-chip-input></paper-chip-input>
```

## Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-chip-secondary-text-color` | The paper-chip label-color |
`--paper-chip-background-color` | The paper-chip background-color |
`--paper-chip-icon-background-color` | The paper-chip avatar background-color |
`--paper-chip-icon-text-color` | The paper-chip icon color |

## Testing
You can run a basic test suite with `wct` command line tool.

Install it via:

```sh
npm install web-component-tester
```

The `wct` tool will run your tests in all the browsers you have installed. Just
run it:

```sh
wct
```

By default, any tests under `test/` will be run. You can override this by
specifying particular files (or globs of files) via `wct path/to/files`.

## License
MIT © fabbricadigitale



