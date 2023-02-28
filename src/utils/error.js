export class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err, res) => {
  const { message, statusCode } = err;
  res.status(err.statusCode || 500).send({
    status: "error",
    statusCode,
    message,
  });
};