# Simple Dropdown Menu
A lightweight dropdown menu utility with click and hover functionalities.

## Features
✅ Click-based dropdown (dropDownMenuClick) ✅ Hover-based dropdown (dropDownMenuHover) ✅ Flexible element selection

## Installation
Include the script in your project:

```js
import { dropDownMenuClick, dropDownMenuHover } from "simple-ddmenu";
```

## Usage
### Click Dropdown
Activates dropdown when clicking a button.

```js
dropDownMenuClick(".menu", ".button");
```
Arguments:

`element`: The dropdown container selector.

`button`: The trigger button selector.

### Hover Dropdown
Shows dropdown when hovering over a button.

```js
dropDownMenuHover(".menu", ".button");
```
Arguments:

`element`: The dropdown container selector.

`button`: The hover trigger selector.

### Example
```html
<button class="button">Menu</button>
<ul class="menu">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```js
dropDownMenuClick(".menu", ".button");
```

```js
dropDownMenuHover(".menu", ".button");
```