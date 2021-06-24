/*
 * Desc:    Register user
 * Route:   POST /api/auth/register
 * Access:  Public
 */
exports.register = (req, res, next) => {
  res.send('Register');
};

/*
 * Desc:    Login user
 * Route:   POST /api/auth/login
 * Access:  Public
 */
exports.login = (req, res, next) => {
  res.send('Login');
};
