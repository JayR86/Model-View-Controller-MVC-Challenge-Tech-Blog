const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("404", {
    message:
      "We're sorry, but the page you requested could not be found. Please check the URL and try again.",
  });
});
module.exports = router;
