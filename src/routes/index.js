import express from "express";
import { ticketRoute } from "./ticket.route";

export const routesApp = (app) => {
  app.use(express.json());
  ticketRoute(app);
};