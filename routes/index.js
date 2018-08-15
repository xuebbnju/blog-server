module.exports = function(app){
  app.use('/api/user', require('./user'));
  app.use('/api/blog', require('./blog'));
  // app.use('./classify', require('./classify'));
  app.get('/', function(req, res, next) {
     res.render('index', { title: 'Express' });
  });
};
