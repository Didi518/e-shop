// création token et sauver en cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  // options pour les cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    Secure: true,
  };
  res.status(statusCode).cookie('token_vendeur', token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
