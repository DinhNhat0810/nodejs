class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /new/:slug
  show(req, res) {
    res.send('New Detail');
  }
}

module.exports = new NewsController();
