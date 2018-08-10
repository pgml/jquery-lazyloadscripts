# jquery-lazyloadscripts.js

jquery-lazyloadscripts.js is a lightweight jquery plugin for lazy loading scripts by appending the script tag to the dom when the element that is requiring the script is in viewport.

## Why?

This script is primarily useful for stuff that doesn't need to be available on page load (such as google maps) to improve loading speed and make all the page speed tools shut up a bit more.

## Usage

### html
```html
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

<section id="map" data-lazy-load-scripts="[SCRIPT_URL]"></section>
```

### javascript
```javascript
$('section').lazyLoadScripts()
```

## Options

**offset**

Type: `Int` Default: `0`

The distance in px the lazy load should be triggered before it arrives at the actual container.

```javascript
$('section').lazyLoadScripts({
	offset: 200 // starts loading 200px above the container
})
```

## Author
Rico Dang

[github/pgmlde](https://github.com/pgmlde/)

## License
Copyright © 2018, Rico Dang. Released under the MIT License.
