const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
	// if token exist, verify. otherwise, return unauthenticated error
  if (authHeader) {
    // to have a space between Bearer and token
    const token = authHeader.split(' ')[1];

		// if verified, return user data. otherwise, return invalid token error.
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) res.status(403).json('Token is not valid!!');
      // assign user to request
			req.user = user;
			// continue running fn in user route
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated!');
  }
};

// only users can update and delete their own account
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // if password input matches client's password OR is an admin
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed!');
    }
  });
};

// only admin can add products
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed!');
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
