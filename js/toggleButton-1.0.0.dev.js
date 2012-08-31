;(function($) {
	"use strict";
    
    var ToggleButton = function(input, options) {        
        var $input = $(input),
			divContent = $("<div/>")
				.css({ position: "relative",
					width: options.ImageWidth + 'px',
					height: options.ImageHeight + 'px' }),
			// Create a decoy element to overlay the checkbox graphic and click it when clicked
			decoyElement = $("<a/>")
				.attr({ id: $input.attr("id") + '_ToggleButton',
					href: "" })
				.css({ position: 'absolute',
					left: '0px', // Initialize left and top to 0px for Opera
					top: '0px',
					width: options.ImageWidth + 'px',
					height: options.ImageHeight + 'px',
					fontSize: options.ImageHeight + 'px', // Firefox uses fontSize to determine the height of href
					backgroundRepeat: 'no-repeat' }),
			useCssSprite = (options.CssSprites.Url !== null),
			setDecoyAction = setDecoyBackgroundImage;
				
		if (useCssSprite) {
			decoyElement.css('background-image', 'url(' + options.CssSprites.Url + ')');
			setDecoyAction = setDecoyCssPosition;
		} else if (options.ImagesPreLoad) {
			$.each([options.CheckedImageUrl, options.UncheckedImageUrl,
				options.CheckedImageOverUrl, options.UncheckedImageOverUrl,
				options.DisabledCheckedImageUrl, options.DisabledUncheckedImageUrl], 
				function (index, val) {
					var img = new Image();
					img.src = val;
				}
			);
		}

		if ($input.is(':disabled')) {
			setDecoyAction($input.is(':checked'), false, true);
		} else {
			onClick();
		}
            
        // Attach events
        $input
            .css('display', 'none') // Set the style of the checkbox to size it and hide it
            .before(divContent.append(decoyElement)) // Attach DOM
            .bind("click change", onClick);
        decoyElement
            .click(onDecoyClick)
            .mouseover(onDecoyMouseOver)
            .mouseout(onDecoyMouseOut);
            
        // IE8: Label click
        if ($.browser.msie && $.browser.version <= 8.99) {            
            $input
                .parent()
                .find('label[for="' + $input.attr('id') + '"]')
                .attr('for', decoyElement.attr('id'));
        }
        
        function onClick() {
            log("onClick");
            
            setDecoyAction($input.is(':checked'), false, $input.is(':disabled'));
        }
        
        function onDecoyClick(e) {
            log("onDecoyClick");
            
            $(input)[0].click();
            e.preventDefault();
            
            return false;
        }
        
        function onDecoyMouseOver() {
            log("onDecoyMouseOver");
            
            setDecoyAction($input.is(':checked'), true, $input.is(':disabled'));
        }
        
        function onDecoyMouseOut() {
            log("onDecoyMouseOut");
            
            // Call _onClick because it restores the correct image
            onClick();
        }
        
        function setDecoyBackgroundImage(checked, over, disabled) {
			var img = null;
			if (checked) {
				if (over) {
					img = options.CheckedImageOverUrl;
				} else if (disabled) {
					img = options.DisabledCheckedImageUrl;
				} else {
					img = options.CheckedImageUrl;
				}
			} else {
				if (over) {
					img = options.UncheckedImageOverUrl;
				} else if (disabled) {
					img = options.DisabledUncheckedImageUrl;
				} else {
					img = options.UncheckedImageUrl;
				}
			}
			if (img === null) {
				img = options.UncheckedImageUrl;
			}
			
            decoyElement.css('background-image', 'url(' + img + ')');
        }
        
        function setDecoyCssPosition(checked, over, disabled) {			
			var pos = null, 
				x, 
				y;
				
			if (checked) {
				if (over) {
					pos = options.CssSprites.CheckedOver;
				} else if (disabled) {
					pos = options.CssSprites.DisabledChecked;
				} else {
					pos = options.CssSprites.Checked;
				}
			} else {
				if (over) {
					pos = options.CssSprites.UncheckedOver;
				} else if (disabled) {
					pos = options.CssSprites.DisabledUnchecked;
				} else {
					pos = options.CssSprites.Unchecked;
				}
			}
			if (pos === null) {
				pos = options.CssSprites.Unchecked;
			}
			
			x = calcultePos(pos[0], options.ImageWidth);
			y = calcultePos(pos[1], options.ImageHeight);			
            decoyElement.css('background-position', x + ' ' + y);
        }
		
		function calcultePos(z, size) {
			z = z.toString();
			if (z.indexOf('px') < 0 && z.indexOf('%') < 0) {
				return -z * size + 'px';
			}
			return z;
		}
        
        function log(msg) {
            if (options.Debug && console && console.log) {
                console.log("%s: %o %o, %o", msg, $(input), decoyElement, options);
			}
        }
    };
    
    $.fn.toggleButton = function(options) {
        options = $.extend({}, $.fn.toggleButton.defaults, options);
        return this.each(function () {
            new ToggleButton($(this), options);            
        });        
    };
    
    $.fn.toggleButton.defaults = {
        ImageWidth: 50,
        ImageHeight: 50,
        CheckedImageUrl: null,
        UncheckedImageUrl: null,
        CheckedImageOverUrl: null,
        UncheckedImageOverUrl: null,
        DisabledCheckedImageUrl: null,
        DisabledUncheckedImageUrl: null,
		ImagesPreLoad: true,
        CssSprites: {
            Url: null,
            Checked: null,
            Unchecked: null,
            CheckedOver: null,
            UncheckedOver: null,
            DisabledChecked: null,
            DisabledUnchecked: null
        },
		Debug: false
    };
    
})(jQuery);

/*
$(".dove").toggleButton({
    ImageWidth: 47,
    ImageHeight: 45,
    CssSprites: {
        Url: "http://img840.imageshack.us/img840/962/doves.png",
        Checked: [0, 1],
        Unchecked: [0, 0],
        CheckedOver: [1, 0],
        UncheckedOver: [1, 1],
        DisabledChecked: [2, 1],
        DisabledUnchecked: [2, 0]
    }
});

$("input:submit").click(function (e) {
    e.preventDefault();
    var c1 = $("#cbDove").is(":checked") ? "have" : "have not";
    var c2 = $("#cbWhite").is(":checked") ? "have" : "have not";
    var txt = "You indicated that you <b>" + c1 + "</b> a dove and you <b>" + c2 + "</b> a white dove";
    $("#result").html(txt);
});
*/