/**
 * NOTICE OF LICENSE
 *
 * Copyright (c) 2018 Rico Dang. All rights reserved.
 * This work is licensed under the terms of the MIT license.
 * For a copy, see <https://opensource.org/licenses/MIT>.
 *
 * @author     Rico Dang <rico@pgml.de>
 * @copyright  2018 Rico Dang
 * @version    0.1.2
 * @date       09/08/2018
 */

;(function($)
{
	$.fn.LazyLoadScripts = function(options)
	{
		var opts = $.extend({
			offset: 0
		}, options)

		var elems = this.map(function(index, el)
		{
			if ($(el).data('script-lazy'))
			{
				return {
					elem: el,
					scriptLoaded: false,
					scriptSrc: $(el).data('script-lazy')
				}
			}
		})

		function isInViewport(elem)
		{
			if (elem.is(':hidden')) return

			var scrollTop      = $(window).scrollTop()
			  , documentBottom = scrollTop + $(window).height()
			  , elOffsetTop    = elem.offset().top
			  , elBottom       = elOffsetTop + elem.height()

			return elBottom >= scrollTop - opts.offset && elOffsetTop <= documentBottom + opts.offset
		}

		$(window).on({ scroll: function()
		{
			elems.each(function(index, el)
			{
				if (!el.scriptLoaded && isInViewport($(el.elem)))
				{
					$('<script />', { src: el.scriptSrc }).appendTo($('body'))
					elems[index].scriptLoaded = true
					$(el.elem).removeAttr('data-script-lazy')
				}
			})
		}})

		return this
	}
}(jQuery))
