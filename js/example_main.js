/* Author:
   Ben Hitz 2012
*/
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "interactions/:gene":"interactionsList",
    },

    initialize:function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home:function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        }
        $('#content').html(this.homeView.el);
    },

     interactionsDetails:function (id) {
        var ints = new ints({gene:gene});
        ints.fetch({
            success:function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                $('#content').html(new InteractionsListView({model:data}).render().el);
            }
        });
    }

});

tpl.loadTemplates(['home', 'table', 'header', 'footer'],
    function () {
        app = new AppRouter();
        Backbone.history.start();
    });




