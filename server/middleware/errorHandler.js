const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = err.message;
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = "404";
    message = "Object ID not found";
  }
  res.status(statusCode);
  res.json({
    message: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

const notFound = (req, res, next) => {
  //const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(400);
  res.json({ message: 'Bad Request' });
};

export { errorHandler, notFound };
