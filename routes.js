Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('home');
});
Router.route('/welcome', function() {
    this.render('welcome');
});
Router.route('/call-paper', function() {
    this.render('call-paper');
});
Router.route('/past-events', function() {
    this.render('past-events');
});