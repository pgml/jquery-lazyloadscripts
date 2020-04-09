# jquery-lazyloadscripts.js

jquery-lazyloadscripts.js is a lightweight jquery plugin for lazy loading scripts by appending the script tag to the dom when the element that is requiring the script is in viewport.

## Why?

This script is primarily useful for stuff that doesn't need to be available on page load (such as google maps) to improve loading speed and make all the page speed tools shut up a bit more.

## Usage

### html
```html
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

<section id="map" data-lazy-load-scripts="SCRIPT_URL"></section>
```

It is also possible to lazy load several scripts by passing the urls in array syntax.

```html
<section id="map" data-lazy-load-scripts='["SCRIPT_URL_1", "SCRIPT_URL_2", "SCRIPT_URL_3"]'></section>
```

### javascript
```javascript
$('section').lazyLoadScripts()
```

## Options

**offset**

Type: `Int`<br />
Default: `0`

The distance in px the lazy load should be triggered before it arrives at the actual container.

```javascript
$('section').lazyLoadScripts({
	offset: 200 // starts loading 200px above the container
})
```

**onWatch**

Type: `function`

The distance in px the lazy load should be triggered before it arrives at the actual container.

```javascript
$('section').lazyLoadScripts({
	// offset: 200,
	onWatch: function(elements)
	{
		console.log(elements)
		/* return object:
		{
			0: {
				elem: $(section),
				inDom: false || true,
				scriptSrc: SCRIPT_URL
			},
			...
		}
		*/
	}
})
```

**onSuccess**

Type: `function`

A callback function that is executed (for each script) if the request succeeds.

**onAllDone**

Type: `function`

A callback function that is executed when all scripts are loaded. 

**onFail**

Type: `function`

A callback function that is executed when one or more scripts failed to load. 

## To-do
- [x] find a cool way to determine if the script has been loaded successfully and pass the status to the onWatch event


## Author
Rico Dang

[github/pgmlde](https://github.com/pgmlde/)

## License
Copyright © 2018, Rico Dang. Released under the MIT License.
