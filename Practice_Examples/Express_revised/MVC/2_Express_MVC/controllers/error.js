exports.error404Page = (req, res, next) => {
  res.status(404).render("404err", { pageTitle: "404 || Error", path: req.path });
};
