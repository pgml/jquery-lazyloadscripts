# jquery-lazyloadscripts.js

jquery-lazyloadscripts.js is a lightweight jquery plugin for lazy loading scripts by appending the script tag to the dom when the element that is requiring the script is in viewport.

## Why?

This script is primarily useful for stuff that doesn't need to be loaded on page load (such as google maps) to make improve loading speed and make all the page speed tools shut up.

## Usage

### html
```html
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

<section id="map" data-script-lazy="[SCRIPT_URL]"></section>
```

### javascript
```javascript
$('section').LazyLoadScripts()
```

## Options

**offset**

Type: `Int` Default: `0`

The distance in px the lazy load should be triggered before it arrives at the actual container.

```javascript
$('section').LazyLoadScripts({
	offset: 200 // starts loading 200px above the container
})
```

## Author
Rico Dang

[github/pgmlde](https://github.com/pgmlde/)

## License
Copyright © 2018, Rico Dang. Released under the MIT License.
