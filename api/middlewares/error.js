const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Erreur interne au serveur';

  // mauvais identifiants mongodb
  if (err.name === 'CastError') {
    const message = `Ressource introuvable avec cet id.. Invalide ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // erreur multis
  if (err.code === 11000) {
    const message = `Données dupliquées ${Object.keys(err.keyValue)} demandée`;
    err = new ErrorHandler(message, 400);
  }

  // erreur jwt
  if (err.name === 'JsonWebTokenError') {
    const message = `Votre url est invalide. Merci de réessayer plus tard`;
    err = new ErrorHandler(message, 400);
  }

  // jwt expiré
  if (err.name === 'TokenExpiredError') {
    const message = `Votre url a expiré. Merci de réessayer plus tard`;
    const err = new ErrorHandler(message, 400);
  }
  res.status(err, statusCode).json({
    success: false,
    message: err.message,
  });
};
