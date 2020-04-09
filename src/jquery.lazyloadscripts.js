/**
 * NOTICE OF LICENSE
 *
 * Copyright (c) 2018 Rico Dang. All rights reserved.
 * This work is licensed under the terms of the MIT license.
 * For a copy, see <https://opensource.org/licenses/MIT>.
 *
 * @author     Rico Dang <rico@pgml.de>
 * @copyright  2018 Rico Dang
 * @version    0.2.2
 * @date       09/08/2018
 */

;(function($)
{
	$.fn.lazyLoadScripts = function(options)
	{
		var opts = $.extend({
			offset: 0,
			onWatch: function() {},
			onSuccess: function() {},
			onAllDone: function() {},
			onFail: function(error) {}
		}, options)

		var elems = this.map(function(index, el)
		{
			if ($(el).data('lazy-load-scripts'))
			{
				return {
					elem: el,
					inDom: false,
					scriptSrc: $(el).data('lazy-load-scripts')
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

			return elBottom >= scrollTop - opts.offset
				&& elOffsetTop <= documentBottom + opts.offset
		}

		opts.onWatch.call(elems)

		$(window).on({ scroll: function()
		{
			elems.each(function(index, el)
			{
				if (!el.inDom && isInViewport($(el.elem)))
				{
					var scriptSrc = typeof el.scriptSrc === 'string'
						? [el.scriptSrc]
						: el.scriptSrc

					var _arr = $.map(scriptSrc, function(src) {
						return $.getScript(src, opts.onSuccess)
					})

					$.when.apply($, _arr).done(opts.onAllDone).fail(opts.onFail)

					elems[index].inDom = true
					$(el.elem).removeAttr('data-lazy-load-scripts')

					opts.onWatch(elems)
				}
			})
		}})

		return this
	}
}(jQuery))
