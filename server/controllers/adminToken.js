const jwt = require("jsonwebtoken");
const db = require('..')


const verifyToken = (req, res, next) => {
  //ACCESS TOKEN FROM HEADER, REFRESH TOKEN FROM COOKIE
  const token = req.headers.token;
  const refreshToken = req.cookies.refreshToken;
  if (token) {
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, admin) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
      req.admin = admin;
      next();
    });
  } else {
    return res.status(401).json("You're not authenticated");  
  }
};

const verifyTokenAndUserAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.admin.id === req.params.id|| req.admin.isAdmin) {
      next();
    } else {
      return res.status(403).json("You're not allowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.admin.isAdmin) {
      next();
    } else {
      return res.status(403).json("You're not allowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndUserAuthorization,
  verifyTokenAndAdmin,
};
