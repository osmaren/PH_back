import express from "express";
import { routesApp } from "./routes";
import { handleError } from "./utils/error";

const app = express();

routesApp(app);

app.use((err, req, res, _next) => {
    handleError(err, res);
});

export default app;