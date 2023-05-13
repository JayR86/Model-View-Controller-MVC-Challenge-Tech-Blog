const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, call the next middleware function
    next();
  }
};

module.exports = withAuth;
