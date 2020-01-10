$(document).ready(function() {
    var scroll = {
        offset: 0,
        offsets: null,
        targets: null,
        $selector: [],

        init: function(obj) {
            var that = this;

            $('[data-scroll]').each(function(i) {
                that.$selector[i] = $(this);
            });


            this.onResized();
            this.onScroll();
            $(window).on( 'resize', $.proxy( this.onResized, this ));
            $(window).on( 'scroll', $.proxy( this.onScroll, this ));
        },

        kill: function() {
            $(window).off( 'resize', $.proxy( this.onResized, this ));
            $(window).off( 'scroll', $.proxy( this.onScroll, this ));
        },

        onResized: function(e) {

            var that = this;
            var pos = 1.5;  // 마우스휠 - 전체애니 1.4 
            var offsets = Math.round($(window).height()/pos);

            that.offsets = $([]);
            that.targets = $([]);

            $.map(that.$selector, function(selector, i) {
                var $el = $(selector);
                var $offsets = Number($el.data('scroll-offset'));
                var top = Math.round( $el.offset().top ) - ($offsets || offsets);

                that.offsets.push( top );
                that.targets.push( $el );
            });

        },

        onScroll: function(e) {
            var that = this;

            for (i = that.offsets.length; i--;) {
                that.checkScroll( that.offsets[i], that.targets[i], "show");
            }

        },

        checkScroll: function( limit, $el, className ) {
            var currentScrollPos = $(document).scrollTop();

            if (currentScrollPos > limit) {
                $el.addClass(className);
            } else {
                $el.removeClass(className);
            }
        }
    }

    scroll.init();

});