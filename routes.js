Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('home');
});
Router.route('/information', function() {
    this.render('information');
});
Router.route('/call-paper', function() {
    this.render('call-paper');
});
Router.route('/past-events', function() {
    this.render('past-events');
});
Router.route('/news', function() {
    this.render('news');
});
