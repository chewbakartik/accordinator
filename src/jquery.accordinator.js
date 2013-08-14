(function($) {
    var settings = ( {
        'titleClass' : null
    });

    var methods = {
        init: function(options) {
            settings = $.extend({}, settings, options);
            $('.' + settings.titleClass).not(":eq(0)").each(function() {
                    $(this).siblings('div').slideUp('fast');
                });
            methods.addStateClass($('.' + settings.titleClass + ':first'));
            $('.' + settings.titleClass).click(function() {
                methods.clickEvent($(this));
            });
        },

        clickEvent: function(div) {
            $('.' + settings.titleClass + '.state-active').each(function() {
                if($(this)[0] != div[0]) {
                    $(this).siblings('div').slideToggle('fast');
                    methods.removeStateClass($(this));
                    $(div).siblings('div').slideToggle('fast');
                    methods.addStateClass(div);
                }
            });
        },

        addStateClass: function(div) {
            $(div).addClass("state-active");
        },

        removeStateClass: function(div) {
            $(div).removeClass("state-active");
        }
    };

    $.fn.accordinator = function( method ) {
        if( methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1));
        } else if ( typeof method === 'object' || !method) {
            return methods.init.apply (this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.accordinator');
        }
    };
})(jQuery);
