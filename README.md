`paper-chip`
===========

Material design: [Chips](https://material.io/guidelines/components/chips.html#).

Polymer 2.x `<paper-chip>` may contain a icon or a photo, some line of text or a contact information with Material Design styling.

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