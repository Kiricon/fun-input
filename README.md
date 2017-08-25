# fun-input
An HTML custom element implementing the `<fun-input>` element.

![top-nav in action](https://github.com/Kiricon/top-nav/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i fun-input
```

---

```Html
<script src="node_modules/fun-input/fun-input.js"></script>
```
or if you're bundling
```Javascript
import "fun-input";
// or
require("fun-input");
```


## Usage
```HTML
<fun-input type="text" name="funInput" />
```


## Customization
You can customize the color of the `fun-input` by assigning values to css elements. 

The who css elements that affect `fun-input` are `--fun-input-color` and `--primary-color`.

You can set there values like so

```CSS
    :root {
        --fun-input-color: red; /* if both are set --fun-input-color takes precedence */
        --primary-color: red; 
    }
```