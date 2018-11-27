# React

React.js version of the color-picker component.

## Development

Install dependencies:
```
$ npm i
```

Then run the application:
```
$ npm run start
```

## Component features
Without any props or children:

```
<ColorPicker />
```

Add `hue` prop to set a custom initial value:

```
<ColorPicker hue={180} />
```

Use a different input element:

```
<ColorPicker>
  <input type="number" min="0" max="360" step="1" />
</ColorPicker>
```

## Web Component features
Without any props or children:

```
<color-picker></color-picker>
```

Add `hue` prop to set a custom initial value:

```
<color-picker hue="180"></color-picker>
```

Use a different input element:

```
<color-picker>
  <input type="number" min="0" max="360" step="1" />
</color-picker>
```

# To-do's
- [ ] Add the styles to the generated Web Component.
