;(function($) {
	'use strict';
    
    var ToggleButton = function(input, options) {        
        var $input = $(input),
			px = 'px',
			id = 'id',
			divContent = $('<div style="position:relative"/>')
				.css({ width: options.ImageWidth + px,
					height: options.ImageHeight + px }),
			// Create a decoy element to overlay the checkbox graphic and click it when clicked
			decoyElement = $('<a href="" style="position:absolute;left:0px;top:0px;background-repeat:no-repeat"/>') // Initialize left and top to 0px for Opera
				.attr({ id: $input.attr(id) + '_ToggleButton' })
				.css({ width: options.ImageWidth + px,
					height: options.ImageHeight + px,
					fontSize: options.ImageHeight + px, // Firefox uses fontSize to determine the height of href
					backgroundImage: 'url(' + options.Url + ')'
					});

		if (isDisabled()) {
			setDecoyCssPosition(isChecked(), false, true);
		} else {
			onClick();
		}
            
        // Attach events
        $input
            .css('display', 'none') // Set the style of the checkbox to size it and hide it
            .before(divContent.append(decoyElement)) // Attach DOM
            .bind('click change', onClick);
        decoyElement
            .click(onDecoyClick)
            .mouseover(onDecoyMouseOver)
            .mouseout(onClick);
            
        // IE8: Label click
        if ($.browser.msie && $.browser.version <= 8.99) {            
            $input
                .parent()
                .find('label[for="' + $input.attr(id) + '"]')
                .attr('for', decoyElement.attr(id));
        }
        
        function onClick() {
            setDecoyCssPosition(isChecked(), false, isDisabled());
        }
        
        function onDecoyClick(e) {
            $(input)[0].click();
            e.preventDefault();
            
            return false;
        }
        
        function onDecoyMouseOver() {
            setDecoyCssPosition(isChecked(), true, isDisabled());
        }
        
        function setDecoyCssPosition(checked, over, disabled) {			
			var pos = null;
				
			if (checked) {
				if (over) {
					pos = options.CheckedOver;
				} else if (disabled) {
					pos = options.CheckedDisabled;
				} else {
					pos = options.Checked;
				}
			} else {
				if (over) {
					pos = options.UncheckedOver;
				} else if (disabled) {
					pos = options.UncheckedDisabled;
				} else {
					pos = options.Unchecked;
				}
			}
			if (pos === null) {
				pos = options.Unchecked;
			}
			
			decoyElement.css('background-position', pos);
        }		
		
		function isChecked() {
			return $input.is(':checked');
		}
		
		function isDisabled() {
			return $input.is(':disabled');
		}        
    };
    
    $.fn.toggleButton = function(options) {
        options = $.extend({}, $.fn.toggleButton.defaults, options);
		
		var calcultePos = function (z, size) {
			var px = 'px';
			z = z.toString();
			if (z.indexOf(px) < 0 && z.indexOf('%') < 0) {
				return -z * size + px;
			}
			return z;
		}
		
		options.Checked = calcultePos(options.Checked[0], options.ImageWidth) + " " + calcultePos(options.Checked[1], options.ImageHeight);
		options.Unchecked = calcultePos(options.Unchecked[0], options.ImageWidth) + " " + calcultePos(options.Unchecked[1], options.ImageHeight);
		if (options.CheckedOver != null) {
			options.CheckedOver = calcultePos(options.CheckedOver[0], options.ImageWidth) + " " + calcultePos(options.CheckedOver[1], options.ImageHeight);
		}
		if (options.UncheckedOver != null) {
			options.UncheckedOver = calcultePos(options.UncheckedOver[0], options.ImageWidth) + " " + calcultePos(options.UncheckedOver[1], options.ImageHeight);
		}
		if (options.CheckedDisabled != null) {
			options.CheckedDisabled = calcultePos(options.CheckedDisabled[0], options.ImageWidth) + " " + calcultePos(options.CheckedDisabled[1], options.ImageHeight);
		}
		if (options.UncheckedDisabled != null) {
			options.UncheckedDisabled = calcultePos(options.UncheckedDisabled[0], options.ImageWidth) + " " + calcultePos(options.UncheckedDisabled[1], options.ImageHeight);	
		}
		
        return this.each(function () {
            new ToggleButton($(this), options);            
        });        
    };
    
    $.fn.toggleButton.defaults = {
        ImageWidth: 50,
        ImageHeight: 50,
		Url: null,
		Checked: null,
		Unchecked: null,
		CheckedOver: null,
		UncheckedOver: null,
		CheckedDisabled: null,
		UncheckedDisabled: null
    };
    
})(jQuery);