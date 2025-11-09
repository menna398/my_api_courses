const courseAuth = (req, res, next) => {
  const secretWord = req.headers.authorization;

  if (secretWord == "hesham") {
    next();
  } else {
    res.status(401).json({
      message: "aunothrized",
      data: null,
    });
  }
};

module.exports = courseAuth;
