(function($) {
    var searchbar = Backbone.Model.extend({
        default: {
            query: ''
        }
    });

    var Item = Backbone.Model.extend({
        defaults: {
            name : 'unknown',
            calories: 'unknown'
        }
    });

    var SearchBar = Backbone.View.extend({

        tagName: "input",

        className: "search-bar",

        el: $('form'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            $(this.el).append("<input class='search-bar'>");
            return this;
        }

    });

    var AddButton = Backbone.View.extend({

        tagName: "Button",

        className: "search-button",

        el: $('form'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            $(this.el).append("<button class='search-button'>Add my Item</button>");
            return this;
        }

    });


    var searchBar = new SearchBar();
    var addButton = new AddButton();
})(jQuery);
